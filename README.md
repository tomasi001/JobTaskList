# JobTaskList
## ADD TASKS WITH
- Title
- Description
- Location
- Priority
- Status

## UPDATE & ARCHIVE TASKS

## SORT BY
- Status
- Date Submitted 

## FILTER BY 
- Status : Complete
- Status : In Progress
- Status : Submitted

## STORE & UPDATE INFORMATION
- In live MongoDb database

# TO GET THE APP RUNNING
- Download zip file of repository
- create folder and extract contents of zip to that folder
- Navigate to that folder in the command line interface
- type "npm install"
- create config.env file in root folder
- in config.env file create MONGO_URI variable for mongo db connection url 
- in config.env file create PORT variable for port number configuration
- type npm start

# TO USE THE APP
- Click the New Job button to add a new Job
- Click the Archive button to view the archived Jobs
- Click the Sort by Status Button to View the Jobs listed in order of their status
- Click Batch Status Update To update status of multiple Jobs
- Click on any of the filter buttons to display only the respective Jobs
- Click the Pencil Icon to update a specific Job
- Click the Bin Icon to Delete a Specific Job
