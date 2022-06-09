// Replaced promises with async-await syntax. Latest feature to handle asynchronous code
console.log('Before')
displayCommits()
console.log('After')

// Anytime we call a function that returns a promise, we can 'await' the result of that function
// whenever we use 'await' it should be within a function with the 'async' keyword
// use 'try-catch' blocks to catch errors in async-await syntax
async function displayCommits() {
    try {
        const user = await getUser(1)
        const repos = await getRepositories(user.githubUsername)
        const commits = await getCommits(repos[0])
        console.log(commits)
    } catch (error) {
        console.log('Error: ', error)
    }
}

function getUser(id) {
    return new Promise((resolve, _reject) => {
        setTimeout(() => {
            console.log('Fetching user...');
            resolve({ id: id, githubUsername: 'Lucky-Tsuma'})
        }, 2000)
    })
}

function getRepositories(_username) {
    return new Promise((resolve, _reject) => {
        setTimeout(() => {
            console.log('Calling github API...');
            resolve(['repo1', 'repo2', 'repo3', 'repo4'])
        }, 2000)
    })
}

function getCommits(_repo) {
    return new Promise((resolve, _reject) => {
        setTimeout(() => {
            console.log('Getting commits all commits first repo...')
            resolve(['First commit', 'Second commit', 'Hotfix'])
        }, 2000)
    })
}