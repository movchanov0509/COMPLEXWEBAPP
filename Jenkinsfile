pipeline {
    agent any
    
    tools {
        nodejs 'NodeJS'
    }
    
    environment {
        CI = 'true'
    }
    
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        
        stage('Build') {
            steps {
                echo 'Building..'
            }
        }
    }
}