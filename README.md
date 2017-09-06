# README #

This document is a howto for running the TFS4JIRA [Synchronizer](https://spartez.com/products/tfs4jira) as an Azure Web App.

### What is this repository for? ###



### The fastest way - an 1 hour eval ###

* go to the [Azure App Service](https://azure.microsoft.com/en-us/try/app-service/web/?language=cs)
* choose (click) "ASP.NET Empty Site"
* click "Create" and follow the wizard (it might take a few minutes)
* take note of your site url, look for https://some-dash-separated-code.azurewebsites.net/
* click "Clone or push with Git" and copy the repoUrl
* now use any git client and clone the repo
* cd into the repo directory 
* add new remote - git remote add tfs4jira https://bitbucket.org/spartez/tfs4jira-azure-web-app.git
* download the synchronizer - git fetch tfs4jira  and git reset --hard tfs4jira/master
* upload the synchronizer to azure - git push origin master --force

Now go to your web app site and log in.

The default user/pass is Alice/contoso!


### The production ready way ###

*This is not yet ready for production*

### How to change the user/password ###

* Edit the App_Data/security/users.xml
* Commit the changes and git push to the origin/master  (git commit -a  and  git push origin master )

### How to update the synchronizer ###

* git fetch tfs4jira - download the newest version
* git rebase tfs4jira/master - to preserve user/pass changes
* git push origin master --force

