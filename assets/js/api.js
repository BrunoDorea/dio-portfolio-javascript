
async function fetchProfileData() {
    const url = 'https://bh-tec.github.io/Portfolio-API/profile.json'
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}
