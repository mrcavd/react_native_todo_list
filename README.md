# Demo Explained

This is a simple demo of a TODO List Manager, showcasing how to use expo-local-authentication to implement a basic user authentication flow. The app allows users to manage their TODO items, and the state of TODO items is managed in-page using the React useState Hook.

## Limitations:

**Navigator:**  
- The app is a single-screen demo without the use of a navigator. It's designed that way to keep the demo lightweight while showcasing the possibilities of a state management system via the useState Hook.

**Local Storage:** 
- Local storage capability is required for a functional TODO List Manager app. However, it is not implemented in this demo to keep it lightweight. The TODO list data should be written into the device's local storage to support data persistence and ensure the user's data is retained between sessions.

**Redux:** 
- Redux is omitted to keep the demo lightweight. If navigators are included to expand on the TODO item's management and create multiple pages, then Redux will be required to facilitate cross-page state management. This will ensure that the state is maintained consistently across different pages of the app.

## Features:

**User Authentication:** 
- The app utilizes expo-local-authentication to enable user authentication, ensuring that only authorized users can access and manage their TODO items.  

**TODO List Management:** 
- Users can create, edit, and remove their TODO items. The state of TODO items is managed within the current session using the useState Hook, providing a responsive and efficient user experience.

## Dependencies:

**expo-local-authentication:** 
- This package is used for implementing the local authentication feature, allowing users to securely log in to the TODO List Manager.  

**React Hooks:** 
- The app leverages React useState Hook to manage the state of TODO items within the component, avoiding the need for a backend or external data storage for this simple demo.

Please note that this is a basic demo and does not include advanced features like data persistence or user authentication beyond the session level. It serves as an example of how to build a simple TODO List Manager with basic user authentication using Expo and React Hooks. Developers can expand and enhance this demo to add more functionality and integrate with backend services for a complete application.

# Getting Started

> **Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.
