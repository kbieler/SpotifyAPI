//function for authorization request

const getAuth = async () => {
    const clientID = 'd9336195cdcf4881ab95a9068c5e4065';
    const clientSecret = 'f05c2eea07f9425eb2cfaaa946406b8c';
    const encodedstr = btoa(clientID+ ':' +clientSecret);
    const response = await fetch ('https://accounts.spotify.com/api/token',
        {
            method: 'POST',
            headers: {
                'Authorization': `Basic ${encodedstr}`,
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'grant_type=client_credentials'
        }
    );
    let token = await response.json();
    console.log(token);
    return token.access_token
}

const loadToken = async () => {
    const token = await getAuth();
    console.log(token);
    return token
}

let track1 = 'golden years';
let artist1 = 'david bowie';
let track2 = 'reptilia';
let artist2 = 'the strokes';
let track3 = 'like a prayer';
let artist3 = 'madonna';
let track4 = 'roses';
let artist4 = 'outkast';
let track5 = 'jealous guy';
let artist5 = 'donny hathaway';
let track6 = 'nothing i can do about it now';
let artist6 = 'willie nelson';
let track7 = 'hey, hey, what can i do';
let artist7 = 'led zeppelin';
let track8 = "he's the greatest dancer";
let artist8 = 'sister sledge';
let track9 = 'chateau lobby #4 (in c for two virgins)';
let artist9 = 'father john misty';

//api call - non specified track
const getSong = async (track, artist) => {
    const token = await loadToken();
    let data = await fetch(`https://api.spotify.com/v1/search?type=track&q=track:${track}+artist:${artist}&limit=1`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });
    data = await data.json();
    console.log(data);
    console.log(data.tracks.items[0].preview_url);
    let audioobj = new Audio(data.tracks.items[0].preview_url);
    audioobj.play();
}


//call different track for each image clicked
let img1 = document.querySelector('.album-art1')
img1.addEventListener('click', () => {getSong(track1, artist1);});

let img2 = document.querySelector('.album-art2')
img2.addEventListener('click', () => {getSong(track2, artist2);});

let img3 = document.querySelector('.album-art3')
img3.addEventListener('click', () => {getSong(track3, artist3);});

let img4 = document.querySelector('.album-art4')
img4.addEventListener('click', () => {getSong(track4, artist4);});

let img5 = document.querySelector('.album-art5')
img5.addEventListener('click', () => {getSong(track5, artist5);});

let img6 = document.querySelector('.album-art6')
img6.addEventListener('click', () => {getSong(track6, artist6);});

let img7 = document.querySelector('.album-art7')
img7.addEventListener('click', () => {getSong(track7, artist7);});

let img8 = document.querySelector('.album-art8')
img8.addEventListener('click', () => {getSong(track8, artist8);});

let img9 = document.querySelector('.album-art9')
img9.addEventListener('click', () => {getSong(track9, artist9);});

