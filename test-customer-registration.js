#!/usr/bin/env node

/**
 * Test script for customer registration flow
 * This script helps verify that the registration endpoint is working correctly
 */

const fetch = require('node-fetch');

async function testRegistration() {
  const baseUrl = 'http://localhost:3000'; // Update with your development server URL

  // Test data for registration
  const testData = {
    email: `test-${Date.now()}@example.com`,
    password: 'testpassword123',
    firstName: 'Test',
    lastName: 'User',
  };

  console.log('Testing customer registration...');
  console.log('Test data:', testData);

  try {
    // Test registration endpoint
    const response = await fetch(`${baseUrl}/api/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testData),
    });

    const result = await response.json();

    console.log('Response status:', response.status);
    console.log('Response body:', result);

    if (response.status === 200) {
      if (result.success) {
        console.log('✅ Registration successful!');
        console.log('Customer created:', result.customer);

        // Test login with the created credentials
        console.log('\nTesting login with created credentials...');
        const loginResponse = await fetch(`${baseUrl}/api/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: testData.email,
            password: testData.password,
          }),
        });

        const loginResult = await loginResponse.json();
        console.log('Login response status:', loginResponse.status);
        console.log('Login response body:', loginResult);

        if (loginResponse.status === 200 && loginResult.success) {
          console.log('✅ Login successful!');
          console.log('Customer access token created');
        } else {
          console.log('❌ Login failed');
        }
      } else {
        console.log('❌ Registration failed:', result.error);
      }
    } else {
      console.log(
        '❌ Registration request failed with status:',
        response.status,
      );
      console.log('Error:', result.error);
    }
  } catch (error) {
    console.error('❌ Error during test:', error.message);
  }
}

// Run the test
testRegistration().catch(console.error);
