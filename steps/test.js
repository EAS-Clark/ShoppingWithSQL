const { Before, Given, When, Then } = require('@cucumber/cucumber');
const { assert } = require('chai');
const { response } = require('express');
const restHelper = require('../src/utils/restHelper.js');

When('I send a GET request to {}', async function (url) {
    const response = await restHelper.getData(`${url}`);
    this.response = response;
});

When('I send a DELETE request to {}', async function (url) {
    const response = await restHelper.deleteData(`${url}`);
    this.response = response;
});

When('I send PATCH request with a {} to {}', async function (data, url) {
    const response = await restHelper.patchData(`${url}`, JSON.parse(data));
    this.response = response;
});

When('I send POST request with a {} to {}', async function (data, url) {
    const response = await restHelper.postData(`${url}`, JSON.parse(data));
    this.response = response;
});

Then('I receive a status code of {}', async function (status) {
    assert.equal(this.response.status, status);
});


Then('I receive a response name of {}', async function (name) {
    assert.equal(this.response.data.response.name, name);
});

Then('I receive a response of {}', async function (response) {
    assert.equal(this.response.data.response, response);
});




