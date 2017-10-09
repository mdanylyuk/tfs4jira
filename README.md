# README #

This document is a howto for running the TFS4JIRA [Synchronizer](https://spartez.com/products/tfs4jira) as an [Azure Web App](https://azure.microsoft.com/en-us/services/app-service/web/).
We prepared this deployment option for those, who doesn't want to host the Stynchronizer using their own infrastructure, 
but are OK with running it, **by themselves**, as a Azure cloud app.

### The fastest way - for a quick, 1h eval###

#### Prerequisites ####

You have to have a basic [git](https://git-scm.com/) skills.

#### How To ####

* go to the [Azure App Service](https://azure.microsoft.com/en-us/try/app-service/web/?language=cs)
* choose (click) "ASP.NET Empty Site"
* click "Create" and follow the wizard (it might take a few minutes)
* take note of your site url, look for https://some-dash-separated-code.azurewebsites.net/
* click "Clone or push with Git" and copy the repoUrl
* now use any git client and clone the repo - **git clone repoUrl**
* add new remote - **git remote add tfs4jira https://bitbucket.org/spartez/tfs4jira-azure-web-app.git**
* download the synchronizer - **git fetch tfs4jira**  and **git reset --hard tfs4jira/master**
* upload the synchronizer to Azure - **git push origin master --force**

Now go to your web app site and log in.

The default user/pass is Alice/contoso!


### The production ready way ###

*This is not yet ready for production*

#### prerequisites ####

* Microsoft Azure account with active subscription.
* Access to [Azure portal](https://portal.azure.com).
* Knowledge what the [Azure web app](https://docs.microsoft.com/en-us/azure/app-service/app-service-web-overview) is. 
* Ability and willingnes to handle the Synchronizer installed as a Microsoft Web App - We, at Spartez, will fully support you with the Synchronizer, **but the Azure part is entirely on you**.

#### How To ####

Preparing the instance:

* Go to the [Azure portal](https://portal.azure.com) and sign in.
* Go to "App Services" 
* Add a new service - choose "**Web app**" - published by Microsoft.
* Click "Create"
* Fill in the create form. **Remember to chose "Windows" as the OS!** Take note of your web app url.
* Now wait till the service is deployed.

The bare instance is now ready, now you need to configure it for the Synchronizer:

* Go to the freshly created service (App services >> name of your service).
* Go to Deployment >> Deployment credentials and set the deployment username and password. Remember to save it.
* Go to Deplomnett >> Deployment option and choose the "**local Git Repository**" as a Deployment Source.
* Go to Settings >> Application settings and: 
    * disable PHP,
    * set "Always On" to "On"
    * Save the changes.
* Go to Settings >> Properties and take note of the "**GIT URL**". You will need it in the next step.

Installing the synchronizer:
The steps below are to be executed on any mashine with a git client installed.

* Use git client and clone the repo - **git clone WEB_APP_GIT_URL** . 
* Go to the newly created repo. 
* Add a new remote - **git remote add tfs4jira https://bitbucket.org/spartez/tfs4jira-azure-web-app.git**
* Download the synchronizer - **git fetch tfs4jira**  and **git reset --hard tfs4jira/master**
* Upload the synchronizer to Azure - **git push origin master**

Go to your web app site. You should see the Synchronizer login screen.
One last thing: **Change the default user/pasword!!!**

### How to change the user/password ###

* Edit the App_Data/security/users.xml
* Commit the changes and git push to the origin/master  
    * **git commit -a** 
    * **git push origin master**

### How to update the synchronizer ###

* **git fetch tfs4jira** - download the newest version
* **git rebase tfs4jira/master** - to preserve user/pass changes
* **git push origin master --force**

### How to do a backup ###
We recommend to use the Azure's site backup/restore.

* Stop the application. Go to App services >> name of your service >> Overview and click "Stop"
* Wait for your Synchronizer to stop. You can see this in the azure portal Activity Log.
* Go to Settings >> Backups (if you have not configured it before, there will be a nice wizard to guide you trough it)
* Click "Backup" to make a backup.
* After it has succeeded go to Overview and and start your Synchronizer.

If your backup ends up with "Partially Succeeded" - this means you forgot to stop the app or did not wait for long enough for your synchronizer to stop.

#### restore ###

* Go to App services >> name of your service >> Settings >> Backups
* Click restore, choose the backup to restore from and click "Ok"
* Wait for the app to restore itself - this might take some time. 

If you are getting a "Error 403 - This web app is stopped." after a restore, go to the Overview and Stop and Start the app.

### What Azure App Service Plan do I need ###

At the very minimum you need the **B1 Basic plan** - due to the "always on" feature, needed for the synchronization to run without pauses.
However, we do recommend to use at least **S1 Standard plan** - due to the backup/restore feature.
