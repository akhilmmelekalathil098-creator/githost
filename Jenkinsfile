pipeline{
    agent any
    stages{
        stage('checkout'){
            steps{
                deleteDir()
                sh '''
                    git clone https://github.com/akhilmmelekalathil098-creator/githost.git
                    ls -l
                '''
            }
        }
        stage('deploy'){
            steps{
                sh '''
                    cp -r githost/* /var/www/html
                    ls -l /var/www/html
                '''
                    
            }
        }
        
    }
}
