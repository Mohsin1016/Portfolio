pipeline {
    agent any

    triggers {
        cron('* * * * *') // This will trigger the job every minute
    }

    tools {
        nodejs "Node"  // Ensure this matches the name of the Node.js installation in Jenkins
    }

    environment {
        GITHUB_TOKEN = credentials('github-token')  // GitHub PAT stored as Jenkins credentials
        VERCEL_TOKEN = credentials('vercel-token')  // Vercel token stored as Jenkins credentials
    }

    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out the code from the repository...'
                git branch: 'mohsin-new', url: 'https://github.com/Mohsin1016/Portfolio.git'
                echo 'Code checkout completed.'
            }
        }

        stage('Install Dependencies') {
            steps {
                // Install npm dependencies
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                // Build your React project
                sh 'npm run build'
            }
        }

        stage('Deploy to Vercel') {
            steps {
                // Set Vercel token as an environment variable for deployment
                withEnv(["VERCEL_TOKEN=${env.VERCEL_TOKEN}"]) {
                    // Use the Vercel CLI to deploy
                    sh '''
                    npm install -g vercel
                    vercel --prod --token $VERCEL_TOKEN --name "portfolio" --yes
                    '''
                }
            }
        }
    }

    post {
        success {
            echo 'Pipeline executed successfully!'
        }
        failure {
            echo 'Pipeline failed.'
        }
    }
}
