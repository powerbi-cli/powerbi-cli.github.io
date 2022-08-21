---
uid: howto/azure-pipeline
title: "How-to: Use the Azure Pipeline task"
documentId: 45075bca-b639-433c-aab3-808ea7a417e7
---

# How to use the Azure Pipeline task

You can use this task with an Azure Pipeline to enable the Power BI CLI within an pipeline.

The task will execute the following steps during a pipeline run:

-   select the Azure sovereign cloud if provided
-   login for with the provided credentials of the service connection (`azureSubsciption`)
-   run the script either loaded from a script file or via the provided inline script

## YAML Snippet

```YAML
- task: pbicli@0
  inputs:
# Required
    azureSubscription: "string"
# Optional
    cloud: "public | china | gcc | gcchigh | dod | germany"
# Required
    scriptType: "bash | batch | ps | pscore"
# Required
    scriptLocation: "inlineScript | scriptPath"
# Required if scriptLocation = scriptPath
    scriptPath: "string"
# Required if scriptLocation = inlineScript
    inlineScript: "string"
# Optional
    arguments: "string"
# Optional if scriptType = ps or pscore
    powerShellErrorActionPreference: "stop | continue | silentlyContinue"
# Optional
    version: "string"
# Optional
    workingDirectory: "string"
# Optional
    verbose: boolean
# Optional
    failOnStandardError: boolean
```

## Arguments

| Argument                                                   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Required |
| ---------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| `azureSubscription`<br>Azure subscription                  | Name of Azure Resource Manager service connection.                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | ✅       |
| `cloud`<br>Azure sovereign cloud                           | Select which Azure sovereign cloud to sevice connection connects to                                                                                                                                                                                                                                                                                                                                                                                                                                                             |          |
| `scriptType`<br>Script Type                                | Type of script: PowerShell/PowerShell Core/Bat/Shell script. Select Shell/PowerShell Core script when running on Linux agent or Batch/PowerShell/PowerShell Core script when running on Windows agent. PowerShell Core script can run on cross-platform agents (Linux, macOS, or Windows).                                                                                                                                                                                                                                      | ✅       |
| `scriptLocation`<br>Script Location                        | Path to script: `scriptPath` or `inlineScript`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | ✅       |
| `scriptPath`<br>Script Path                                | Fully qualified path of the script(.ps1 or .bat or .cmd when using Windows based agent else .ps1 or .sh when using linux based agent) or a path relative to the the default working directory                                                                                                                                                                                                                                                                                                                                   | ✅       |
| `inlineScript`<br>Inline Script                            | You can write your scripts inline here. When using Windows agent, use PowerShell or PowerShell Core or batch scripting whereas use PowerShell Core or shell scripting when using Linux based agents. For batch files use the prefix \"call\" before every pbicli command. You can also pass predefined and custom variables to this script using arguments \n\n example for PowerShell/PowerShellCore/shell: \npbicli version \npbicli workspace list \n\n example for batch:\ncall pbicli version \ncall pbicli workspace list | ✅       |
| `arguments`<br>Script Arguments                            | Arguments passed to the script                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |          |
| `powerShellErrorActionPreference`<br>ErrorActionPreference | Prepends the line `$ErrorActionPreference = 'VALUE'` at the top of your powershell/powershell core script.                                                                                                                                                                                                                                                                                                                                                                                                                      |          |
| `version`<br>Version of Power BI CLI                       | The version of the Power BI CLI to use. If not specified, the 'latest' version will be used.                                                                                                                                                                                                                                                                                                                                                                                                                                    |          |
| `workingDirectory`<br>Working Directory                    | Current working directory where the script is run. Empty is the root of the repo (build) or artifacts (release), which is $(System.DefaultWorkingDirectory)                                                                                                                                                                                                                                                                                                                                                                     |          |
| `verbose`<br>Verbose logging                               | If this is true, this task will print more information to the console on run                                                                                                                                                                                                                                                                                                                                                                                                                                                    |          |
| `failOnStandardError`<br>Fail on Standard Error            | If this is true, this task will fail when any errors are written to the StandardError stream. Unselect the checkbox to ignore standard errors and rely on exit codes to determine the status                                                                                                                                                                                                                                                                                                                                    |          |

## Example

To list all the workspace the service provider has acces to, you can use the following yaml snippet:

```YAML
- task: pbicli@1
  inputs:
    azureSubscription: 'Demos'
    scriptType: 'bash'
    scriptLocation: 'inlineScript'
    inlineScript: 'pbicli workspace list'
```

## Feedback
