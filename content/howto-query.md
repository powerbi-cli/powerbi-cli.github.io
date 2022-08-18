---
uid: howto/query
title: "How-to: Query command output"
documentId: c5ecf3b3-d851-4a17-99aa-44c0ae9bedbf
---

# How to query Power BI CLI command output using a JMESPath query

_(Content copied and adopted from [Azure CLI documentation](https://docs.microsoft.com/en-us/cli/azure/query-azure-cli))_

The Power BI CLI uses the `--query` parameter to execute a [JMESPath query](http://jmespath.org/) on the results of commands. JMESPath is a query language for JSON, giving you the ability to select and modify data from CLI output.

The `--query` parameter is supported by all commands in the Power BI CLI. This article covers how to use the features of JMESPath and gives examples of queries.

## Dictionary and list CLI results

Even when using an output format other than JSON, CLI command results are first treated as JSON for queries. CLI results are mostly a JSON array. Arrays are sequences of objects that can be indexed, and dictionaries are unordered objects accessed with keys.

The following is an example of an array:

```json
[1, 2, 3]
```

The following is an example of a dictionary:

```json
{
    "isRunning": false,
    "time": "12:00",
    "number": 1
}
```

## Get properties in a dictionary

Working with dictionary results, you can access properties from the top level with just the key. The `.` **(subexpression)** character is used to access properties of nested dictionaries. Before introducing queries, take a look at the unmodified output of the `pbicli workspace show` command:

### [Bash](#tab/bash)

```bash
pbicli workspace show --workspace QueryDemo
```

### [PowerShell](#tab/powershell)

```powershell
pbicli workspace show --workspace QueryDemo
```

---

The command will output a array:

```json
[
    {
        "id": "a4621d17-9dfd-4ed9-af64-404ce45e95a8",
        "isReadOnly": false,
        "isOnDedicatedCapacity": false,
        "type": "Workspace",
        "name": "QueryDemo"
    }
]
```

The following command gets the name of the workspace by adding a query:

### [Bash](#tab/bash)

```bash
pbicli workspace show --workspace QueryDemo --query "[0].name"
```

### [PowerShell](#tab/powershell)

```powershell
pbicli workspace show --workspace QueryDemo --query "[0].name"
```

---

```json
"QueryDemo"
```

Note that query strings are case sensitive. For example, changing 'name' to 'Name' in the query above will not return the correct results.

## Get multiple values

To get more than one property, put expressions separated by commas in square brackets `[ ]` **(a multiselect list)**. The following command gets from the first workspace name and id key all at once:

### [Bash](#tab/bash)

```bash
pbicli workspace list --query "[0].[name,id]"
```

### [PowerShell](#tab/powershell)

```powershell
pbicli workspace list --query "[0].[name,id]"
```

---

```json
["QueryDemo", "a4621d17-9dfd-4ed9-af64-404ce45e95a8"]
```

These values are listed in the result array in the order they were given in the query. Since the result is an array, there are no keys associated with the results. To get a dictionary instead of an array, see the section below.

## Rename properties in a query

To get a dictionary instead of an array when querying for multiple values, use the `{ }` **(multiselect hash)** operator. The format for a multiselect hash is `{displayName:JMESPathExpression, ...}`. `displayName` will be the string shown in output, and `JMESPathExpression` is the JMESPath expression to evaluate. Modifying the example from the last section by changing the multiselect list to a hash:

### [Bash](#tab/bash)

```bash
pbicli workspace list --query "[0].{Workspace:name,ID:id}"
```

### [PowerShell](#tab/powershell)

```powershell
pbicli workspace list --query "[0].{Workspace:name,ID:id}"
```

---

```json
{
    "Workspace": "QueryDemo",
    "ID": "a4621d17-9dfd-4ed9-af64-404ce45e95a8"
}
```

## Get properties in an array

An array has no properties of its own, but it can be indexed. This feature is shown in the last example with the expression `[0]`, which gets the first element of the array. There's no guarantee CLI output is ordered, so avoid using indexing unless you're sure of the order or don't care which element you get. To access the properties of elements in an array, you do one of two operations: _flattening_ or _filtering_. This section covers how to flatten an array.

Flattening an array is done with the `[]` JMESPath operator. All expressions after the `[]` operator are applied to each element in the current array. If `[]` appears at the start of the query, it flattens the CLI command result. The results of `pbicli workspace list` can be inspected with this feature. The following query gets the name, and id for each workspace:

### [Bash](#tab/bash)

```bash
pbicli workspace list --query "[].{Name: name, ID: id}"
```

### [PowerShell](#tab/powershell)

```powershell
pbicli workspace list --query "[].{Name: name, ID: id}"
```

---

```json
[
    {
        "Name": "QueryDemo",
        "ID": "a4621d17-9dfd-4ed9-af64-404ce45e95a8"
    },
    {
        "Name": "QueryDemo 2",
        "ID": "0f90ad11-c52e-4bfe-929d-4a438b90f978"
    }
]
```

## Filter arrays with boolean expressions

The other operation used to get data from an array is filtering. Filtering is done with the `[?...]` JMESPath operator. This operator takes a predicate as its contents. A predicate is any statement, including Boolean properties, that can be evaluated to either true or false. Expressions where the predicate evaluates to true are included in the output.

The first query demonstrate how to list the names of all Power BI workspaces connected to a premium capacity (Premium per user, Premium per capacity or Embedded). The second and third queries show two different ways to list all workspaces without premium capacity.

### [Bash](#tab/bash)

```bash
# Boolean values are assumed to be true, so you can directly evaluate the isDefault property.
pbicli workspace list --query [?isOnDedicatedCapacity]

# To check if a Boolean property is false, you can use the comparison operator == or the logical operator !.
pbicli workspace list --query '[?!isOnDedicatedCapacity].name'
pbicli workspace list --query '[?isOnDedicatedCapacity==`false`]'
```

### [PowerShell](#tab/powershell)

```powershell
# Boolean values are assumed to be true, so you can directly evaluate the isDefault property.
pbicli workspace list --query "[?isOnDedicatedCapacity]"

# To check if a Boolean property is false, you can use the comparison operator == or the logical operator !.
pbicli workspace list --query "[?!isOnDedicatedCapacity].name"
pbicli workspace list --query '[?isOnDedicatedCapacity==``false``]'
```

Notice the extra escape characters (`` ` ``) surrounding the value `false` in the command above. These extra escape characters are present because Power BI CLI commands are considered Command Prompt scripts, so both PowerShell and Command Prompt's parsing need to be taken into consideration. The Power BI CLI will only receive a symbol if it still exists after 2 rounds of parsing. For more information about other possible quoting issues please see [Azure CLI: Quoting issues with PowerShell](https://github.com/Azure/azure-cli/blob/dev/doc/quoting-issues-with-powershell.md).

---

JMESPath offers the standard comparison and logical operators. These include `<`, `<=`, `>`, `>=`, `==`, and `!=`. JMESPath also supports logical and (`&&`), or (`||`), and not (`!`). Expressions can be grouped within parenthesis, allowing for more complex predicate expressions. For the full details on predicates and logical operations, see the [JMESPath specification](http://jmespath.org/specification.html).

In the last section, you flattened an array to get the complete list of all VMs in a resource group. Using filters, this output can be restricted to only Linux VMs:

### [Bash](#tab/bash)

```bash
pbicli workspace list --query "[?isOnDedicatedCapacity].{Name: name, ID: id}"
```

### [PowerShell](#tab/powershell)

```powershell
pbicli workspace list --query "[?isOnDedicatedCapacity].{Name: name, ID: id}"
```

---

```json
[
    {
        "Name": "QueryDemo",
        "ID": "a4621d17-9dfd-4ed9-af64-404ce45e95a8"
    },
    {
        "Name": "QueryDemo 2",
        "ID": "0f90ad11-c52e-4bfe-929d-4a438b90f978"
    }
]
```

> [!IMPORTANT]
> In JMESPath, strings are always surrounded by single quotes (`'`) or escape characters (`` ` ``). If you use double quotes as part of a string in a filter predicate, you'll get empty output.

## JMESPath functions

JMESPath also has built-in functions that allow for more complex queries and for modifying query output. This section focuses on using JMESPath functions to create queries while the Manipulating output with functions section demonstrates how to use functions to modify the output.

Expressions are evaluated before calling the function, so arguments themselves can be JMESPath expressions. The following examples demonstrates this by using `contains(string, substring)`, which checks to see if a string contains a substring. This command finds all workspaces with the name containing the subscring _Query_:

### [Bash](#tab/bash)

```bash
pbicli workspace list --query "[?contains(name,'Query')].{Name: name, ID: id}"
```

### [PowerShell](#tab/powershell)

```powershell
pbicli workspace list --query "[?contains(name,'Query')].{Name: name, ID: id}"
```

---

```json
[
    {
        "Name": "QueryDemo",
        "ID": "a4621d17-9dfd-4ed9-af64-404ce45e95a8"
    },
    {
        "Name": "QueryDemo 2",
        "ID": "0f90ad11-c52e-4bfe-929d-4a438b90f978"
    }
]
```

## Pipe expressions

Similar to how `|` is used in the command line, `|` can be used in JMESPath queries to apply expressions to intermediate query results. We can also use `|` to break down complex queries into simpler subexpressions. To shorten the query from the previous section, use `|` to apply the filter after flattening and selecting data.

### [Bash](#tab/bash)

```bash
pbicli workspace list --query "[].{Name: name, ID: id} | [? contains(name,'Query')]"
```

### [PowerShell](#tab/powershell)

```powershell
pbicli workspace list --query "[].{Name: name, ID: id} | [? contains(name,'Query')]"
```

---

```json
[
    {
        "Name": "QueryDemo",
        "ID": "a4621d17-9dfd-4ed9-af64-404ce45e95a8"
    },
    {
        "Name": "QueryDemo 2",
        "ID": "0f90ad11-c52e-4bfe-929d-4a438b90f978"
    }
]
```

See the [JMESPath specification - Built-in Functions](http://jmespath.org/specification.html#built-in-functions) for the full list of functions.

## Manipulating output with functions

JMESPath functions also have another purpose, which is to operate on the results of a query. Any function that returns a non-boolean value changes the result of an expression. For example, you can sort data by a property value with `sort_by(array, &sort_expression)`. JMESPath uses a special operator, `&`, for expressions that should be evaluated later as part of a function. The next example shows how to sort a VM list by OS disk size:

### [Bash](#tab/bash)

```bash
pbicli workspace list --query "sort_by([].{Name: name, ID: id}, &Name)"
```

### [PowerShell](#tab/powershell)

```powershell
pbicli workspace list --query "sort_by([].{Name: name, ID: id}, &Name)"
```

---

```json
[
    {
        "Name": "QueryDemo",
        "ID": "a4621d17-9dfd-4ed9-af64-404ce45e95a8"
    },
    {
        "Name": "QueryDemo 2",
        "ID": "0f90ad11-c52e-4bfe-929d-4a438b90f978"
    }
]
```

See the [JMESPath specification - Built-in Functions](http://jmespath.org/specification.html#built-in-functions) for the full list of functions.

## Formatting query results

The Power BI CLI uses JSON as its default output format, however different output formats may better suit a query depending on its purpose and results. Note that queries are always run on the JSON output first and then formatted.

This section will go over `tsv` formatting and some use cases for each format.

## TSV output format

The `tsv` output format returns tab- and newline-separated values without additional formatting, keys, or other symbols. This is useful when the output is consumed by another command.

One use case for `tsv` formatting is queries that retrieve a value out of a CLI command, such as an Power BI workspace ID, and store the value in a local environment variable. By default the results are returned in JSON format. This may be an issue when dealing with JSON strings which are enclosed in `"` characters. The quotes may not be interpreted by the shell if the command output is directly assigned to the environment variable. This can be seen in the following example that assigns a query result to an environment variable:

### [Bash](#tab/bash)

```bash
WORKSPACE=(pbicli workspace show --workspace QueryDemo --query "[0].name")
echo $WORKSPACE
```

### [PowerShell](#tab/powershell)

```powershell
$WORKSPACE=$(pbicli workspace show --workspace QueryDemo --query "[0].name")
echo $WORKSPACE
```

---

```json
"QueryDemo"
```

To prevent enclosing return values with type information use `tsv` formatting as demonstrated in the following query:

### [Bash](#tab/bash)

```bash
WORKSPACE=(pbicli workspace show --workspace QueryDemo --query "[0].name" --output tsv)
echo $WORKSPACE
```

### [PowerShell](#tab/powershell)

```powershell
$WORKSPACE=$(pbicli workspace show --workspace QueryDemo --query "[0].name"  --output tsv)
echo $WORKSPACE
```

---

```json
QueryDemo
```

Another use case is to use multiple values form a Power BI CLI query in combination with the next series of commands. This is shown in the following example that assigns a query result with all the workspace ids to an environment variable and loops thru that environment variable to execute the next Power BI CLI command to retrieve all reports within the provided workspace id:

### [Bash](#tab/bash)

```bash
# Retrieve all workspace ids
workspaces=`pbicli workspace list --query [*]id --output tsv`

# Loop thru all the available workspaces
for workspace in $workspaces
do
    pbicli report list --workspace $workspace
done
```

### [PowerShell](#tab/powershell)

```powershell
# Retrieve all workspace ids
$workspaces=$(pbicli workspace list --query [*]id --output tsv)

# Loop thru all the available workspaces
foreach ($workspace in $workspaces) {
    pbicli report list --workspace $workspace
}
```

---

## Feedback
