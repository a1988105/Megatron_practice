const fetchData = async (url) => {
    try {
      const response = await fetch(url, {mode: 'no-cors'})
      const data = await response.json()
      return data
    } catch(ex) {
      console.error(ex);
    }
}

module.exports = fetchData