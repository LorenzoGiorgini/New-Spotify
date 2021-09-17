const fetched = () => {
    return fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem", {
        "method": "GET",
    })
}


const goodMorning = () => {
    fetched()
    .then(response => response.json())
    .then(body => {
        let row = document.getElementById("good-mor")
        console.log(body)
        for (let i = 0; i < 6; i++) {
            let obj = body.data[i]

            const col = document.createElement("div")
            col.classList = ("col-6, col-md-4 ,col-lg-3")

            col.innerHTML = `
                      <div class="card-top p-0 mb-2">
                        <div class="row no-gutters">
                          <div class="col-md-4">
                            <img
                              src="${obj.album.cover_medium}"
                              class="img-fluid h-100 w-100"
                            />
                          </div>
                          <div
                            class="
                              col-md-8
                              d-flex
                              justify-content-center
                              align-items-center
                            "
                          >
                            <div class="card-body p-0 pl-1">
                              <p class="card-text">
                                <span>${obj.album.title}</span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
            `
            row.appendChild(col)
        }
    })
    .catch(error => console.log(error))
}



const recentlyPlayed = (idOfRow) => {
    fetched()
    .then(response => response.json())
    .then(body => {
        let row = document.getElementById(idOfRow)
        console.log(row)
        for (let i = 0; i < body.data.length; i++) {
            let obj = body.data[i]

            const col = document.createElement("div")
            col.classList = ("col-2")

            col.innerHTML = `
                        <div class="card" style="margin-bottom:25px">
                            <img
                              src="${obj.album.cover_medium}"
                              class="card-img-top img-fluid"
                            />
                            <div class="card-body">
                              <h5 class="card-title dotted">${obj.album.title}</h5>
                            </div>
                        </div>
            `
            row.appendChild(col)
        }
    })
    .catch(error => console.log(error))
}


window.onload = () => {
    goodMorning()
    recentlyPlayed("recently-played")
    recentlyPlayed("shows-to")
}