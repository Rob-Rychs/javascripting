// use destructuring to access the first loction of the locations property
const Google = {
  locations: ['Mountain View', 'New York', 'London']
};

const { locations: [location] } = Google;
location