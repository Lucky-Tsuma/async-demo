// Replaced callbacks with promises. Good practice
console.log('Before')

// in chained then() statements, we can still use a single catch statement at the end. It will handle errors arising in any of the nested then()
getUser(1)
    .then(user => getRepositories(user.githubUsername))
    .then(repos => getCommits(repos[0]))
    .then(commits => console.log('Commits: ', commits))
    .catch(error => console.log('Error', error.message))
console.log('After')

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