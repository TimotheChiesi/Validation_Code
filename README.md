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

Here is the lists of tests I made for each page:


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

1. **should not allow form submission with no name**:
  - Visit the login page URL.
  - Fill out all input field except name.
  - Fill out the "message" textarea.
  - Try to click the submit button.
  - Verify that we have a validation message for the name.

2. **should not allow form submission with no password**:
  - Visit the login page URL.
  - Fill out all input field except password.
  - Fill out the "message" textarea.
  - Try to click the submit button.
  - Verify that we have a validation message for the password.


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