[![CircleCI](https://circleci.com/gh/SalesforceCloudServices/ltng-support-storybook.svg?style=shield&circle-token=b8cd995667170827eb5728ab5a84815f10ccc3b6)](https://circleci.com/gh/SalesforceCloudServices/ltng-support-storybook)
[![Github](https://img.shields.io/badge/license-MIT-343434.svg)](https://choosealicense.com/licenses/mit/)
[![Code Coverage](https://img.shields.io/badge/Code Coverage-100-00BB00.svg)](https://choosealicense.com/licenses/mit/)
[![Code Coverage](https://img.shields.io/badge/Branch Coverage-100-00BB00.svg)](https://choosealicense.com/licenses/mit/)


# Overview

Unit Tests are for Logic, are what Storybooks are for Visuals.

This project is for developers and testers to simplify developing and verifying components.

The goal is a simple framework that lets us see the same component in multiple scenarios (stories) next to one another - using hot reloading for instant verification with the [Local Lightning Web Development beta](https://developer.salesforce.com/blogs/2019/10/announcing-lwc-local-development-beta.html)

For example, let's say we wanted to see how the component looked if:

* If the component didn't have an message sent
* If the component had such a large message, it would overflow

**Did the css overflow kick in correctly? Did we get the right css style?  etc.**

So we define each of those as "scenes" with the information that the component binds to.  Each of these define the scenario that we would want to visually verify as we develop.

![Small Width Example](docs/images/StorybookSimpleExample.png)

Now, we are able to keep the testing information outside of the component and in a consistent and reliable way. Without relying on Defaults.

Please see the [Installation](#install) section below for more on how to install on your Sandbox / Demo org.

**Please note: sample code (metadata api and dx formats) are is also available in the [mdapi](./mdapi) and [dx](./dx) folders above**

---

NOTE: This project is for demonstration purposes.
For more information, please see the [Licensing](#licensing) section below

# How to Use

(Please see the [Installation](#install) for setup)

Once you have the lwc components installed (and likely ignored by adding `**/scene_*` to your `.forceignore` file) - you can run the examples or create your own.

To run the storybooks, simply start your [Local Lightning Web Development beta](https://developer.salesforce.com/blogs/2019/10/announcing-lwc-local-development-beta.html) by running the command `sfdx force:lightning:lwc:start`

![Screenshot of local lwc](docs/images/localLWC_Server.png)

There are three samples provided on how you could write your storybooks:

## Simple

A simple example is where you simply have a storybook, and data for it to bind against:

![Simple Demo](docs/images/storybookDemoSimple.gif)

There are three things ultimately needed:

**Custom Component**
Create a custom component that will contain an instance of a `story_book`.

**A story_book Instance**
Within the body of that `story_book` instance, include the component you want to test.

(Optionally, you can include a `title` attribute to name the story. Additionally, a `description` slot is available, to further clarify what is being tested.)

**Scene**
Define a scene within your Custom Component's javascript controller, to bind your component to.

---

In this instance, the story is very close to traditional lightning web component development.  Yet we have a clear way to test how our component will look within this scenario, without deploying to Salesforce.

For more see the [story_exampleSimple](force-app/main/default/lwc/story_exampleSimple/)

## List

Instead of testing once at a time, sometimes we would want to see multiple scenarios all at once.  (This can be helpful for testing css class refactoring)

![List Demo](docs/images/storybookDemoList.gif)

Similar to the simple example, we are still sticking to mostly traditional lightning web component development.  Yet we iterate over each scenario, and verify how the component behaves with each scenario.

**Custom Component** -
Create a custom component that will contain an instance of `story_book`.

**Multiple Scenes** -
Define an array to contain multiple `Scene` instances on your Custom Component's controller.

**Iterator** -
An iterator that will loop over each Scene within your Scene array.

**A story_book instance** -
Place an instance of story_book and bind it to the `for:item` within your iterator.

Now we will have a story_book instance for each scene.

Note: it is often recommended for your `Scene` records to include information about the test and not just data.  For example, specifying different widths will let you verify different [Lightning Design System widths](https://www.lightningdesignsystem.com/utilities/sizing/) all at once.

For more information, plese see the [story_exampleList](force-app/main/default/lwc/story_exampleList/)

## Complex

Sometimes, you may want to have multiple scenes, but would like to choose between them.  The `Complex` example uses the `story_sceneSelector` component.

Note, that you can specify the initial scene shown by the `story_sceneSelector`, so you can specify which scene to show by default.

![Complex Demo](docs/images/storybookDemoComplex.gif)

Similar to the Simple Example, we simply have a storybook bound to the current Scene.

In this case though, we have a list of multiple scenes and allow the `story_sceneSelector` to help us choose which story to show.

This is simply by listening for a `scene` event (that we listen for here by the `handleSceneChange` handler), and storing it as the scene to bind to.

Here we will need:

**Custom Component** -
Create a custom component that will contain an instance of `story_book` and `story_sceneSelector`

**Multiple Scenes** -
Define an array to contain multiple `Scene` instances on your Custom Component's controller.

**story_sceneSelector** -
We define the initial scene to show by the 'index' (so we can consistently look at the same story after save).  We also must listen for the `save` event (by binding to `onsave` on the component), so we store the event.detail as the "current" scene.

**A story_book instance** -
Place an instance of story_book and bind it to the "current" scene.

Note: it is recommended that an `if:true={...}` checking if the "current" scene is specified - as this will avoid null binding errors until the "current" scene is initialized.

For more information, please see the [Complex Example](force-app/main/default/lwc/story_exampleComplex/)

----

NOTE: This project is for demonstration purposes.
For more information, please see the [Licensing](#licensing) section below

---

# Install

Unlike many other salesforce examples, this does not require deployment to your org.

## Manual Install

**Step 1. - download the latest under `Releases`**
This will include the various `scene_*` lwc components.

Add these to your force-app/.../lwc folder for your project.

**Step 2. - Update your `.forceignore` to ignore scene_ files**
It is likely that the stories are desired only to be included within version control and not on the org.

Including the line `**/scene_*` within your `.forceignore` file, will ensure the storybook files are available locally, but will not be deployed to the org nor included within your packages.

See [the How to Use section](#how-to-use) for how to run and create your own stories.

## Install via URL

This works very similar to an App Exchange install.

Please login to an available sandbox and click the link below.

[https://test.salesforce.com/packaging/installPackage.apexp?p0=04t3s000003OoSDAA0](https://test.salesforce.com/packaging/installPackage.apexp?p0=04t3s000003OoSDAA0)

(or simply navigate to `https://YOUR_SALESFORCE_INSTANCE/packaging/installPackage.apexp?p0=04t3s000003OoSDAA0` <br />
if you are already logged in)

![Install for Admins](docs/images/installPackage.png)

It is recommended to install for Admins Only (but all options will work)

##### Pull down the components to run locally

`sfdx force:source:pull` or `sfdx force:source:retrieve -p force-app/main/default/lwc`

##### View the Demos

That is it.

Likely, you will never need to create Salesforce Pages for you Storybooks. (Although it is helpful if you desire to automate your visual testing - such as with Selenium)

We have created three examples available for you, each as different tabs.

If you would like others to access the demo pages, simply grant them on the `scene_StorybookParticipant` permission set.

Thats it. See the [How to Use](#how-to-use) section for how to use the app.
	
# Licensing

Copyright 2020 Salesforce

(MIT)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
