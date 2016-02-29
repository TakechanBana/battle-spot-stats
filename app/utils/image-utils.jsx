export default {
  getBackgroundImageFromImgKey1: (str) => {
    str = str.length < 3 ? ('00' + str).slice(-3) : str
    var source = 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/' + str + '.png'
    return {
      backgroundImage: 'url(' + source + ')',
      backgroundSize: 'contain',
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat'
    }
  }
}
