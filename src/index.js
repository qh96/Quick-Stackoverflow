const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const query = "https://stackoverflow.com/search?q="

const getQuestion = () => {
	const question = $('.question').value.trim()
	return question ? question : false
}

const search = () => {
	const question = getQuestion()
	if (getQuestion()){
		url = query + question
		window.open(url)
	}
}

document.addEventListener('keydown', e => {
  if (e.keyCode === 13) search()
})

$('.button').addEventListener('click', search)
