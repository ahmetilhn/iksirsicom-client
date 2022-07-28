pipeline {
    agent any
    stages {
        stage('Build İmage') {
            steps {
                echo 'İ will Build from SCM ready-on docker image'
            }
        }
    }
        stage('Push Private Repo') {
            steps {
                echo 'Stage for Push İmage to Private Nexus repo'
            }
        }	
        stage('Beta Deploy') {
            steps {
                echo 'For QA - Get from Repo and Deploy For Test'
            }
        }	
        stage('Live Deploy') {
            steps {
                echo 'For Live - Get from Repo and Deploy for Live '
            }
        }	
	
	
    post { 
        always { 
            echo 'I will always Post Pipeline -Hello again!-'
        }
    }
}
