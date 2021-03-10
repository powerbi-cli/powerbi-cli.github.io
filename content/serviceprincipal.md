---
uid: install/serviceprincipal
title: Setup a Service Principal
documentId: 4a6ed0cc-5b77-4f1f-96d4-550f9688a80e
---

# Setup a Service Principal

To use service principal with the Power BI CLI, follow these steps:

## Step 1 - Create an Azure AD app

Create an Azure AD app using one of these methods and store the following information securely as it is needed:

-   Azure app's Application ID
-   Azure AD app's secret
-   Azure app's Tenant ID

### Creating an Azure AD app in the Microsoft Azure portal

See the [create an Azure AD app](https://docs.microsoft.com/en-us/azure/active-directory/develop/howto-create-service-principal-portal&WT.mc_id=DP-MVP-5003419) article for the steps. You can skip the 'Role' and 'Policy' parts.

### Creating an Azure AD app using a script

This section includes a sample script to create a new Azure AD app using the Azure CLI or PowerShell.

### [Azure CLI](#tab/az)

```bash
# Result contains the appId, password (secret) and tenant
# Sign in as a user that's allowed to create an app
az login

# Creates a new Azure AD web application and service principal
az ad sp create-for-rbac --name  <ApplicationName>
```

### [PowerShell](#tab/powershell)

```powershell
# The app ID - $app.appid
# The service principal object ID - $sp.objectId
# The app key - $key.value

# Sign in as a user that's allowed to create an app
Connect-AzureAD

# Create a new Azure AD web application
$app = New-AzureADApplication -DisplayName <ApplicationName> -Homepage "https://localhost:44322" -ReplyUrls "https://localhost:44322"

# Creates a service principal
$sp = New-AzureADServicePrincipal -AppId $app.AppId

# Get the service principal key
$key = New-AzureADServicePrincipalPasswordCredential -ObjectId $sp.ObjectId
```

---

## Step 2 - Create an Azure AD security group

Your service principal doesn't have access to any of your Power BI content and APIs. To give the service principal access, create a security group in Azure AD, and add the service principal you created to that security group.

### Creating an Azure AD security group in the Microsoft Azure portal

See the [create a basic group and add members using Azure AD](https://docs.microsoft.com/en-us/azure/active-directory/fundamentals/active-directory-groups-create-azure-portal&WT.mc_id=DP-MVP-5003419) article for the steps.

### Creating an Azure AD security group using a script

### [Azure CLI](#tab/az)

```bash
# Result contains the appId, password (secret) and tenant
# Sign in as a user that's allowed to create an app
az login

# Create an Azure AD security group
$group = az ad group create --display-name <GroupName> --mail-nickname notSet --query "{objectId:objectId}" --output tsv

# Retrieve correct object ID of the Setivce Principal
$member = az ad sp show --id <AppID> --query "{objectId:objectId}" --output tsv

# Add the service principal to the group
az ad group member add --group $group --member-id $member
```

### [PowerShell](#tab/powershell)

```powershell
# Required to sign in as admin
Connect-AzureAD

# Create an Azure AD security group
$group = New-AzureADGroup -DisplayName <GroupName> -SecurityEnabled $true -MailEnabled $false -MailNickName notSet

# Add the service principal to the group
Add-AzureADGroupMember -ObjectId $($group.ObjectId) -RefObjectId $($sp.ObjectId)
```

---

## Step 3 - Enable the Power BI service admin settings

For an Azure AD app to be able to access the Power BI content and APIs, a Power BI admin needs to enable service principal access in the Power BI admin portal.

1. Navigate to to Power BI Admin Portal: https://app.powerbi.com/admin-portal/tenantSettings
1. Scroll down to the `Developer settings` section
1. Expand the `Allow service principals to use Power BI APIs` setting
1. Click on the `enable` toggle to enable the setting
1. Choose `Specific security groups (Recommended)` in the 'Apply to' radio buttons
1. Add the security group created in step 2 in the textbox
1. Click on `Apply` button to save the setting

:::image type="content" source="../images/serviceprincipal-powerbiadminportal.png" alt-text="Screenshot of the Development settings in the Power BI Admin portal ":::

## Step 4 - Required API permissions

To access the Power BI APIs vai the Power BI CLI, the service principal need several scope assigned. In the table below is an overview of the required scopes.

| Command   | Required scope                                                                 |
| --------- | ------------------------------------------------------------------------------ |
| admin     | Tenant.Read.All, Tenant.ReadWrite.All                                          |
| app       | App.Read.All                                                                   |
| capacity  | Capacity.Read.All, Capacity.ReadWrite.All                                      |
| dashboard | Dashboard.Read.All, Dashboard.ReadWrite.All, Content.Create                    |
| dataflow  | Dataflow.ReadWrite.All, Dataflow.Read.All                                      |
| dataset   | Dataset.ReadWrite.All, Dataset.Read.All                                        |
| feature   | None                                                                           |
| gateway   | Dataset.Read.All, Dataset.ReadWrite.All                                        |
| import    | Dataset.ReadWrite.All                                                          |
| report    | Report.Read.All, Report.ReadWrite.All, Dataset.Read.All, Dataset.ReadWrite.All |
| workspace | Workspace.Read.All, Workspace.ReadWrite.All                                    |

Adding the scopes as API permissions can be done via the Azure Portal on the management pane of the service principal.

> [!NOTE]
> For the **Tenant.Read.All** and **Tenant.ReadWrite.All** scopes _Admin consent_ is needed. This can be applied via the Azure portal.

:::image type="content" source="../images/serviceprincipal-apipermission.png" alt-text="Screenshot of adding API permissions for the service principal":::

## Step 5 - Add the service principal to your workspace

To enable your Azure AD app access artifacts such as reports, dashboards and datasets in the Power BI service, add the service principal entity, or the security group that includes your service principal, as a member or admin to your workspace.

Alternative you can add the service principal as `Power BI administrator` via `Roles and administrators` part of your Azure Active Directory management.

## Feedback
