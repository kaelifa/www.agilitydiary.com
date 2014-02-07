/**
 * Show ViewModel
 *
 * @param {object} data Mongoose document from Show Schema
 */
function ShowViewModel(data) {
	return {
		Name: data.Name,
		Club: data.Club,
		ShowDate: data.ShowDate,
		ShowEnd: data.ShowEnd,
		ClosingDate: data.ClosingDate,

		ParsedDate: data.ParsedDate,
		ParsedEnd: data.ParsedEnd,
		ParsedClosingDate: data.ParsedClosingDate,

		Venue: {
			Name: data.Venue.Name,
			Address: data.Venue.Address,
			PostCode: data.Venue.PostCode,
		},

		Location: {
			Latitude: data.Location.Latitude,
			Longitude: data.Location.Longitude
		},

		EntriesTo: data.EntriesTo,
		Files: data.Files,
		Logo: data.Logo,
		Website: data.Website
	};
}

module.exports = ShowViewModel;