---
uid: howto/quotes
title: "How-to: Using quotes sucessfully"
documentId: 17b2606b-92ef-414e-883e-8060b99a37aa
---

# Using quotes sucessfully

Using the correct quotes (`'` single, `"` double or the `` ` `` grave-accent) in combination with a shell is usually a challenge.

## Use quotation marks in parameters

_(Content copied and adopted from [Azure CLI documentation](https://docs.microsoft.com/en-us/cli/azure/use-cli-effectively#use-quotation-marks-in-parameters))_

When you work with Power BI CLI commands, be aware of how your shell uses quotation marks and escapes characters. If you support scripts used in different shells, you need to understand how they differ.

-   Bash. [Quoting](https://www.gnu.org/software/bash/manual/html_node/Quoting.html)
-   PowerShell. [About Quoting Rules](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_quoting_rules)
-   Windows Command Prompt. [How-to: Escape Characters, Delimiters and Quotes at the Windows command line](https://ss64.com/nt/syntax-esc.html)

> [!NOTE]
>
> Due to a known issue in PowerShell, some extra escaping rules apply. For more information, see [Quoting issues with PowerShell](https://github.com/Azure/azure-cli/blob/dev/doc/quoting-issues-with-powershell.md).

To avoid unanticipated results, here are a few suggestions:

-   If you provide a parameter that contains whitespace, wrap it in quotation marks.

-   In Bash or PowerShell, both single and double quotes are interpreted correctly. In Windows Command Prompt, only double quotes are interpreted correctly -- single quotes are treated as part of the value.

-   If your command is only going to run on Bash (or Zsh), use single quotes to preserve the content inside the JSON string. This is necessary when supplying inline JSON values. For example, this JSON is correct in Bash: `'{"key": "value"}'`.

-   If your command will be run at a Windows Command Prompt, you must use double quotes. If the value contains double quotes, you must escape it. The equivalent of the above JSON string is `"{\"key\": \"value\"}"`

-   Use Power BI CLI's `@<file>` convention to load from a file and bypass the shell's interpretation mechanisms.

```
pbicli dataset datasource update --workspace Workspace --report MyReport --update-details @updateDetails.json
```

-   Bash evaluates double quotes in exported variables. If this behavior isn't what you want, escape the variable: `"\$variable"`.

-   There are special characters of PowerShell, such as at `@`. To run Power BI CLI in PowerShell, add ` before the special character to escape it. You can also enclose the value in single or double quotes "/".

```PowerShell
# The following three examples will work in PowerShell

--parameterName `@parameters.json
--parameterName '@parameters.json'
--parameterName "@parameters.json"

# This example will not work in PowerShell

--parameterName @parameters.json
```

-   When you use the --query parameter with a command, some characters of JMESPath need to be escaped in the shell.

### [Bash](#tab/bash)

These three commands are correct and equivalent in Bash:

```bash
pbicli version --query '"powerbi-cli"'
pbicli version --query \"powerbi-cli\"
pbicli version --query "\"powerbi-cli\""
```

Here are two examples of incorrect commands in Bash:

```bash
# Wrong, as the dash needs to be quoted in a JMESPath query
pbicli version --query powerbi-cli
pbicli version: error: argument --query: ParserError: Unexpected token type: Number, value: NaN

# Wrong, as the dash needs to be quoted in a JMESPath query, but quotes are interpreted by Bash
az version --query "powerbi-cli"
pbicli version: error: argument --query: ParserError: Unexpected token type: Number, value: NaN
```

### [PowerShell](#tab/powershell)

These five commands will work correctly in PowerShell:

```powershell
pbicli version --query '\"powerbi-cli\"'
pbicli version --query "\`"powerbi-cli\`""
pbicli version --query "\""powerbi-cli\"""
```

---

For more example comparisons between Bash, PowerShell and Cmd, see [Query Azure CLI command output](xref:howto/query)

## Quotes with JSON options

With some commands it is possible to add plain JSON as an option to the command.

In this sample we are using [`pbicli pipeline deploy`](xref:reference/pipeline#pbicli-pipeline-deploy)

### [Bash](#tab/bash)

In Bash use the single quote `'` to enclose the JSON and escape the double quotes as `""`:

```bash
pbicli pipeline deploy --pipeline Pipeline --options '{ ""sourceStageOrder"": 0, ""options"": { ""allowOverwriteArtifact"": true } }'
```

### [PowerShell](#tab/powershell)

In PowerShell use the single quote `'` to enclose the JSON and escape the double quotes as `""`:

```powershell
pbicli pipeline deploy --pipeline Pipeline --options '{ ""sourceStageOrder"": 0, ""options"": { ""allowOverwriteArtifact"": true } }'
```

---

## Feedback
