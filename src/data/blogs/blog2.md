---
title: 'Connect Your React App with Azure AD using react-aad-msal'
type: 'Tech'
slug: 'connect-react-app-with-react-aad-msal'
link: 'https://medium.com/@pavelray/connect-your-react-app-with-azure-ad-using-3ddd39223d27'
path: '/blogs'
banner: ../images/blogs/connect-react-app-with-aad.png
linkWebsite: Medium
---

In this story, I’ll describe how to connect your React App with **Azure AD** and call a secured API hosted in Azure with a bearer token.
To do this your need one **azure** account. You can create your azure account here — ***[https://portal.azure.com](https://portal.azure.com/)***

## Step 1

Once you have created your account, then in the search bar type **“App Registration”**. It’ll take you to the new app registration section. Please follow this link to register new app — ***https://docs.microsoft.com/en-us/azure/active-directory/develop/quickstart-register-app***
<br/>
<br/>
Our react app will communicate with this app for authentication and authorization in azure active directory. Here you need to give your react app’s URL in the redirect URL, so that once the Azure AD validates the user and it’ll return back to your react app with ID Token. Refer to the below image to add your redirect URL. In the development stage, you can add ***https://localhost:3000*** in this section.