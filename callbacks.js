// Used callbacks and Named functions to get rid of callback hell problem
console.log('Before')
getUser(1, displayUser)
console.log('After')

function displayUser(user){
    console.log('User:', user)

    getRepositories(user.githubUsername, displayRepositories)
}

function displayRepositories(repos){
    console.log('Github repositories: ', repos);

    getCommits(repos[0], displayCommits)
}

function displayCommits(commits){
    console.log('Commits: ', commits)
}

function getUser(id, callback) {
    setTimeout(() => {
        console.log('Fetching user...');
        callback({ id: id, githubUsername: 'Lucky-Tsuma'})
    }, 2000)
}

function getRepositories(_username, callback) {
    setTimeout(() => {
        console.log('Calling github API...');
        callback(['repo1', 'repo2', 'repo3', 'repo4'])
    }, 2000);
}

function getCommits(_repo, callback) {
    setTimeout(() => {
        console.log('Getting commits all commits first repo...')
        callback(['First commit', 'Second commit', 'Hotfix'])
    }, 2000)

}