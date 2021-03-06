const fetchData = async (url) => {
    try {
      const response = await fetch(url, {mode: 'cros', credentials: "same-origin"})
      const data = await response.json()
      return data
    } catch(ex) {
      console.error(ex);
    }
}

module.exports = fetchData