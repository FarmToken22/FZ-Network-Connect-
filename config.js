// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyvpplWEfp_tmBWJpwSjYSC1fAHbtSkn0",
  authDomain: "ft-exchange-8cdf6.firebaseapp.com",
  databaseURL: "https://ft-exchange-8cdf6-default-rtdb.firebaseio.com",
  projectId: "ft-exchange-8cdf6",
  storageBucket: "ft-exchange-8cdf6.firebasestorage.app",
  messagingSenderId: "395116015923",
  appId: "1:395116015923:web:a5e379f8d1df33d50e0e46",
  measurementId: "G-LKH38X0T8Q"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const database = firebase.database();

// Admin ID fetch করার function
let adminId = null;

function fetchAdminId() {
  database.ref('admitId').once('value')
    .then((snapshot) => {
      adminId = snapshot.val();
      console.log('Admin ID loaded:', adminId);
    })
    .catch((error) => {
      console.error('Error fetching admin ID:', error);
    });
}

// App শুরু হওয়ার সময় Admin ID load করুন
fetchAdminId();

// Admin ID check করার function
function isAdmin(userId) {
  return userId === adminId;
}

// ব্যবহারের উদাহরণ:
// if (isAdmin(currentUserId)) {
//   // Admin specific কাজ
// }