---
uid: overview/releasenotes
title: Power BI CLI release notes
documentId: 80cb43a5-4a0a-4f60-9690-d41cca745bb0
---

# Power BI CLI release notes

## v1.2.1 - February 25, 2022

### Changed

**admin**

-   Fixed error in parameter `--workspace-file` of `workspace scan` command

## v1.2.0 - December 20, 2011

### Added

**admin**

-   Added missing commands, including workspace scan, get users, and information protection label commands

**cloud**

-   Added functionality (multi cloud)

**configure**

-   Added functionality

**dataflow**

-   Added `transaction` command
-   Added `update` command

**dataset**

-   Added `query` command to execute DAX queries
-   Added `refresh` command
-   Added `user` command

**pipeline**

-   Added functionality

**scorecard**

-   Added functionality

**user**

-   Added functionality

### Changed

**xmla**

-   Deprecated with this version; will removed in a future version

## v1.1.0 - May 16, 2021

### Added

**embedded**

-   Added functionality

**xmla**

-   Added functionality, but in preview

### Changed

**General**

-   change of the default login behaviour

**report**

-   fix issue with the `rebind` command

## v1.0.4 - October 6, 2020

### Changed

**General**

-   fix login issue: not correctly store auth token

## v1.0.2 - September 22, 2020

### Changed

**workspace**

-   Fixed option `--workspace` to be required for command `workspace add list`

## v1.0.1 - August 27, 2020

### Changed

**General**

-   Multiple description are updated

**dataflow**

-   Fixed missing commands `refresh` and `storage`

**version**

-   Fixed incorrect version reference

## v1.0.0 - August 27, 2020

### Added

**admin**

-   Added functionality

**capacity**

-   Added functionality

**feature**

-   Added functionality

### Changed

**General**

-   [BREAKING CHANGE] `group` commands and options are renamed to `workspace`
-   `version` changed to command

**workspace**

-   Renamed from `group`

## v0.9.0 - June 22, 2020

This version is the first beta release of this Power BI CLI.

The command supported by this version are:

```text
app
dashboard
dataflow
dataset
gateway
group
import
report
```

## Feedback
