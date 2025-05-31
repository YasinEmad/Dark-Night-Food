import { uploadMenu } from './seedData.js';

console.log('Starting data upload...');
uploadMenu().then((success) => {
  if (success) {
    console.log('Data upload completed successfully');
  } else {
    console.error('Data upload failed');
  }
});

