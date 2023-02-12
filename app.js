const reviewContainer = document.getElementById('review-container');

const reviews = [
  {
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    alt: 'profile1',
    text: 'Course has really helped our business. Needless to say we are extremely satisfied with the results. Course is great. Keep up the excellent work.',
    name: 'Mersey K.',
  },
  {
    img: 'https://images.unsplash.com/photo-1531123414780-f74242c2b052?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    alt: 'profile2',
    text: 'No matter where you go, course is the coolest, most happening thing around! Thanks for the great service.',
    name: 'Jerrine G.',
  },
  {
    img: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80',
    alt: 'profile3',
    text: 'Since I invested in course I made over 100,000 dollars profits. I use course often. Needless to say we are extremely satisfied with the results.',
    name: 'Wolf T.',
  },
];

function populateDisplay() {
  reviews.forEach((review) => {
    const cardElement = document.createElement('div'); //create div for the profile cards
    cardElement.classList.add('card'); // add class to style it

    const imageContainer = document.createElement('div'); // img container
    imageContainer.classList.add('img-container'); //add img container class to style it

    const imageElement = document.createElement('img');
    imageElement.setAttribute('src', review.img);
    imageElement.setAttribute('alt', review.alt);
    imageContainer.append(imageElement);

    cardElement.append(imageContainer);

    reviewContainer.append(cardElement);
  });
}
populateDisplay();
