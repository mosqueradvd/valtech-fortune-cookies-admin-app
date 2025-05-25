# Fortune Cookies Admin App

<!-- DOCS-IGNORE:start -->
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-0-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->
<!-- DOCS-IGNORE:end -->

Manage the **Fortune-Cookie** phrases shown on the storefront directly
from VTEX Admin.

Merchants can **create**, **edit** and **delete** phrases without touching code.


## Preview

You can preview this app by following this link: ***[https://davidvaltech--valtech.myvtex.com/fortune-cookies](https://davidvaltech--valtech.myvtex.com/fortune-cookies)***

##

<img width="1505" alt="image" src="https://github.com/user-attachments/assets/7d81aca1-4591-42bb-b412-e61ea72c55be" />

##

## Features

| Feature | Details |
| ------- | ------- |
| CRUD on Master Data **CF** | Create, edit, delete and sort phrases |
| Phrases section | Displays a lucky fortune phrases within the VTEX IO Admin Panel. |
| I18n-ready | UI texts in `/react/messages` (React-Intl) |
| Built on standards | This apps follows VTEX IO's best practices |


## Guidelines

Some of the best practices and optimizations used for the development of this app were:

- Internationalization of texts.
- Optimization of backend services consumption through Hooks.
- Use of VTEX's native components to speed up the develop process and enhance the UI.

## Installation

```bash
vtex install valtech.fortune-cookies-admin@0.x
```

## Configuration 

No extra settings.

The app assumes:

Data Entity: ```CF```
Schema: ```public```
Field: CookieFortune (case sensitive)
If you renamed the field/entity, edit ```/react/services/mdApi.ts```.

## Usage

- Run ```vtex link```
- Go to Admin → Content → Fortune cookies.
- Enter a new phrase → Click create.
- Use the trash icon on any row to delete.
- Changes propagate to the storefront in ≤ 1 s

## Development

- **Hooks**: useFortuneCookies (REST) · useToast (feedback)
- **UI**: VTEX Styleguide Table + Form
- **Messages** in /react/messages/{locale}.json

