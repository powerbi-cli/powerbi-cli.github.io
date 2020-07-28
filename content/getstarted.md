---
uid: overview/getstarted
title: Get started with Power BI CLI
documentId: efa9334d-11c1-4966-af35-8e7579f80f94
---

# Get started with Power BI CLI

Welcome to the Power BI CLI! This article introduces the CLI and helps you complete common tasks.

> [!NOTE]
> All scripts and Power BI CLI examples are written for the `bash` shell. One-line examples will run on any platform. Longer examples which include line continuations (`\`) or variable assignment need to be modified to work on other shells, including PowerShell.

## Install the Power BI CLI

You can install the CLI by following the [installation instructions](xref:install/install).

After installing the CLI for the first time, check that it's installed and you've got the correct version by running `pbicli --version`.

## Sign In

Before using any CLI commands with a local install, you need to sign in with [pbicli login](xref:reference/index#pbicli-login).

1. Run the login command of the Azure CLI

```bash
az login
```

If the Azure CLI can open your default browser, it will do so and load an Azure sign-in page.

Otherwise, open a browser page at https://aka.ms/devicelogin and enter the authorization code displayed in your terminal.

2. Sign in with your account credentials in the browser.
3. After a successfull login run the login command of the Power BI CLI

```bash
pbicli login --azurecli
```

See the [Azure CLI documentation](https://docs.microsoft.com/en-us/cli/azure/get-started-with-azure-cli?view=azure-cli-latest#sign-in) for more info.

There are other ways to sign, which are covered in detail in [Sign in with Power BI CLI](xref:install/signin).

## Feedback
