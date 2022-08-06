// Handle Form data
function test(e) {
  const uri = "https://still-savannah-43128.herokuapp.com/lbc/2022"
    let email = document.getElementById('email').value
    let fullName = document.getElementById('full_name').value
    let phoneNumber = document.getElementById('phone').value
    let locationFrom = document.getElementById('location_from').value
    let otherInfo = document.getElementById('other').value
    let meansOfInfo

    const radioArray = document.getElementsByClassName('radios')
    for(const item of radioArray) {
      if(item.checked) {
        meansOfInfo = item.value
      }
    }

    if(!email || !fullName || !phoneNumber || !locationFrom) {
      alert('Please complete the form')
      return
    } else {
      const data = {
        'email': email,
        'full_name': fullName,
        'phone_number': phoneNumber,
        'location_from': locationFrom,
        'other_means_of_information': otherInfo,
        'means_of_information': meansOfInfo
      }
  
      $.ajax({
        type: "POST",
        headers: {
          'Content-type' : 'application/json'
        },
        url: uri,
        data: JSON.stringify(data),
        processData: false,
        dataType: 'json'
      }).done(function (response) {
        document.getElementById('email').value = null
        document.getElementById('full_name').value = null
        document.getElementById('phone').value = null
        document.getElementById('location_from').value = null
        document.getElementById('other').value = null
        for(const item of radioArray) {
          if(item.checked) item.checked = false
        }
        if(response.data) {
          alert('Form submitted successfully')
        }
      }).fail(function (jqXHR, textStatus, errorThrown) {
        document.getElementById('email').value = null
        document.getElementById('full_name').value = null
        document.getElementById('phone').value = null
        document.getElementById('location_from').value = null
        document.getElementById('other').value = null
        for(const item of radioArray) {
          if(item.checked) item.checked = false
        }
        alert(`Error: ${jqXHR.responseJSON.message}`)
      })
    }

  }