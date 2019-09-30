def app_name = 'sunsten-frontend'
def container_name = 'sunsten-app'
def namespace = 'sunsten'
def docker_rep_app = "${env.DOCKER_REPOSITORY}/${app_name}"
def docker_image_tag = "${docker_rep_app}:v${env.BUILD_NUMBER}"
def docker_image_tag_latest = "${env.DOCKER_REPOSITORY}/${app_name}:latest"

pipeline {
    agent any
    stages {
        stage('Checkout github') {
          steps {
            checkout scm
          }
        }
        stage('Build Docker Image') { 
            steps {
              container('docker') {
                dir('./frontend-static') {
                  sh "docker build -t ${docker_image_tag} ."
                }
              }
            }
        }
        stage('Push Docker Image') { 
            steps {
              container('docker') {
                withCredentials([[$class: 'UsernamePasswordMultiBinding',
                  credentialsId: env.DOCKER_SUNSTEN_CREDENTIALS_ID,
                  usernameVariable: 'DOCKER_HUB_USER',
                  passwordVariable: 'DOCKER_HUB_PASSWORD']]) {
                  sh """
                    docker login -u ${DOCKER_HUB_USER} -p ${DOCKER_HUB_PASSWORD}
                    docker push ${docker_image_tag}
                    docker tag ${docker_image_tag} ${docker_image_tag_latest}
                    docker push ${docker_image_tag_latest}
                    """
                }
              }
            }
        }
        stage('Deploy/Update to kubernetes') { 
            steps {
              container('kubectl') {
                sh 'echo GETTING PODSI'
                withKubeConfig([credentialsId: env.K8s_CREDENTIALS_ID, serverUrl: env.K8s_SERVER_URL, namespace: "${namespace}"]) {
                  dir('./kubernetes') {
                    sh 'kubectl get pods'
                    sh 'kubectl apply -f frontend-deployment.yml'
                    sh 'kubectl apply -f frontend-service.yml'
                    sh "kubectl rollout restart deployment/${app_name}"
                    // sh "kubectl set image deployment/${app_name} ${container_name}=${docker_image_tag}"
                    sh "kubectl apply -f ingress.yml"
                  }
                }
              }
            }
        }
    }
}