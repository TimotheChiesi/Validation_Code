# Hello World

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install helloworld.

Use node v16 use :
```bash
nvm install 16
```

```bash
npm i
```

## Usage

Start the application dev with :

```bash
npm run start
```

Created the dist with :

```bash
npm run dist
```

Analyse the coding rules with :

```bash
npm run lint
```

## TP2 : E2E Test

Here is the lists of tests I made for each page. To run them I use the command ```npm run test-e2e--chrome```.
There is also a small screenshot of my test results.


### Index

1. **Verify Header Section**:
  - Verify the header.

2. **Verify Apartment Gallery**:
  - Charge the page.
  - Verify that there is 6 photos.

3. **Verify Characteristics Section**:
  - Charge the page.
  - Verify that the description is OK.

4. **Verify Contact Navigation**:
  - Charge the page.
  - Click on the "Contactez-nous" button.
  - Verify that we land on /contact URL.


### Feedback

1. **should render the feedback form**:
  - Visit the feedback page URL.
  - Check for the presence of the feedback form.

2. **Submit Feedback Form**:
  - Visit the feedback page URL.
  - Fill out the "name" input field.
  - Fill out the "message" textarea.
  - Click the submit button.
  - Verify that the new message is visible.

3. **should not allow form submission with no name**:
  - Visit the feedback page URL.
  - Fill out all input field but with no name.
  - Try to click the submit button.
  - Verify that we have a validation message for the name input.


### Contact

1. **should render the contact form correctly**:
  - Visit the contact page URL.
  - Check for the presence of the contact form.

2. **should submit the form successfully**:
  - Visit the contact page URL.
  - Fill out all input field.
  - Fill out the "message" textarea.
  - Click the submit button.
  - Verify that fields has been emptied.

3. **should not allow form submission with invalid email**:
  - Visit the contact page URL.
  - Fill out all input field but with an invalid email.
  - Fill out the "message" textarea.
  - Try to click the submit button.
  - Verify that we have a validation message for the email.

4. **should not allow form submission with no phone number**:
  - Visit the contact page URL.
  - Fill out all input field except phone number.
  - Fill out the "message" textarea.
  - Try to click the submit button.
  - Verify that we have a validation message for the phone number.


### Login

1. **should load the login page and display the form**:
  - Visit the login page URL.
  - Check for the presence of the login form.
  - Check for the presence of the name input.
  - Check for the presence of the password input.
  - Check for the presence of the submit button.
  

2. **should not allow form submission with no name**:
  - Visit the login page URL.
  - Fill out all input field except name.
  - Try to click the submit button.
  - Verify that we have a validation message for the name.

3. **should not allow form submission with no password**:
  - Visit the login page URL.
  - Fill out all input field except password.
  - Try to click the submit button.
  - Verify that we have a validation message for the password.

4. **should submit the form with valid credentials and navigate to /admin**:
  - Visit the login page URL.
  - Fill out all input field.
  - Click the submit button.
  - Verify that we land on /admin page.


### Geo

1. **should render the header correctly**:
  - Visit the geo page URL.
  - Check for the correct header.

2. **should render the main sections correctly**:
  - Visit the geo page URL.
  - Check for the presence of the main section.


## Pricing

1. **should load the pricing page and check main section**:
  - Visit the pricing page URL.
  - Verify the main section.

2. **should load the pricing page and check pricing section**:
  - Visit the pricing page URL.
  - Verify each card of the pricing section.


### Admin

1. **should load the admin page when authorized**:
  - Visit the admin page URL.
  - Check for the presence of the disconnect button.
  - Check for the presence of the table.

2. **should log out and redirect to the login page**:
  - Visit the admin page URL.
  - Click the disconnect button.
  - Verify that we land on the login page.