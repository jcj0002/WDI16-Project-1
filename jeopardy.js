$(document).ready(function () {
    console.log("connected")

    let total = 0
    

    const genres10 = {
        description: "SCENIC PHOTOGRAPHY",
        rightAnswer: "What is landscape photography?",
        wrongAnswer1: "What is fashion  photography?",
        wrongAnswer2: "What is portrait photography?",
        points: 10

    };
    $('#five').click(function () {
        $(this).html(genres10.description).append($('<br>'), $('<br>'))
        $('#five').append('<button id="a">A</button>').append(genres10.rightAnswer, $('<br>'))
        $('#five').append('<button id="b">B</button>').append(genres10.wrongAnswer1, $('<br>'))
        $('#five').append('<button id="c">C</button>').append(genres10.wrongAnswer2, $('<br>'))
        $('.totalDisplay').text(total);

        $('#a').one('click', function () {

            //if correct answer
            if (genres10.rightAnswer = "CORRECT!") {
                $("#five").css('background-color', 'darkgreen');

                // }
                // add points
                total += 10
            }

            console.log(total)

            //else
            //remove points

        })


        $('#b').one('click', function () {
            //if correct answer
            if (genres10.wrongAnswer1 = "INCORRECT!") {
                $("#five").css('background-color', 'darkred');

                // }
                // add points
                total -= 10
            }
            console.log(total)
        })

        $('#c').one('click', function () {
            //if correct answer
            if (genres10.wrongAnswer2 = "INCORRECT!") {
                $("#five").css('background-color', 'darkred');

                // }
                // add points
                total -= 10
            }
            console.log(total)
        })


    })
    // $('#five').click(function(){
    //     $(this).html(genres10.wrongAnswer1)

    // $('#five').click(function(){
    //  $(this).html(genres10.wrongAnswer2)








    //   let timeClock = 30;
    //    let gameTimer = document.getElementById('#five')

    //    let timer = setInterval (countdown, 1000);
    //    function countdown(){
    //        if (timeClock === 0){
    //            clearTimeout(timeClock);
    //        } else{
    //          gameTimer.innerHTML = timeClock +'seconds remaining';
    //        timeClock--;
    //         }
    //        }


    // })



    const settings10 = {
        description: "ARTIFICIAL LIGHT",
        rightAnswer: "What is ISO?",
        wrongAnswer1: "What is aperture?",
        wrongAnswer2: "What is manual?",
        points: 10

    };

    $('#six').click(function () {
        $(this).html(settings10.description).append($('<br>'), $('<br>'))

        $('#six').append('<button id= "d">A</button>').append(settings10.rightAnswer, $('<br>'))
        $('#six').append('<button id= "e">B</button>').append(settings10.wrongAnswer1, $('<br>'))
        $('#six').append('<button id= "f">C</button>').append(settings10.wrongAnswer2, $('<br>'))
        $('.totalDisplay').text(total);
        $('#d').one('click', function () {

            //if correct answer
            if (settings10.rightAnswer = "CORRECT!") {
                $("#six").css('background-color', 'darkgreen');

                // }
                // add points
                total += 10
            }

            console.log(total)

            //else
            //remove points

        })
        $('#e').one('click', function () {
            //if correct answer
            if (settings10.wrongAnswer1 = "INCORRECT!") {
                $("#six").css('background-color', 'darkred');

                // }
                // add points
                total -= 10
            }
            console.log(total)
        })
        $('#f').one('click', function () {
            //if correct answer
            if (settings10.wrongAnswer2 = "INCORRECT!") {
                $("#six").css('background-color', 'darkred');

                // }
                // add points
                total -= 10
            }
            console.log(total)
        })





    })
    const equipment10 = {
        description: "CASE FOR CAMERA",
        rightAnswer: "What is camera bag?",
        wrongAnswer1: "What is grocery bag?",
        wrongAnswer2: "What is coin pouch?",
        points: 10

    };

    $('#seven').click(function () {
        $(this).html(equipment10.description).append($('<br>'), $('<br>'))

        $('#seven').append('<button id="g">A</button>').append(equipment10.rightAnswer, $('<br>'))
        $('#seven').append('<button id="h">B</button>').append(equipment10.wrongAnswer1, $('<br>'))
        $('#seven').append('<button id="i">C</button>').append(equipment10.wrongAnswer2, $('<br>'))
        $('.totalDisplay').text(total);
        $('#g').one('click', function () {

            //if correct answer
            if (equipment10.rightAnswer = "CORRECT!") {
                $("#seven").css('background-color', 'darkgreen');

                // }
                // add points
                total += 10
            }

            console.log(total)

            //else
            //remove points

        })
        $('#h').one('click', function () {
            //if correct answer
            if (equipment10.wrongAnswer1 = "INCORRECT!") {
                $("#seven").css('background-color', 'darkred');

                // }
                // add points
                total -= 10
            }
            console.log(total)
        })
        $('#i').one('click', function () {
            //if correct answer
            if (equipment10.wrongAnswer2 = "INCORRECT!") {
                $("#seven").css('background-color', 'darkred');

                // }
                // add points
                total -= 10
            }
            console.log(total)

        })





    })
    const lenses10 = {
        description: "LENS FOR DETAILS",
        rightAnswer: "What is macro lens?",
        wrongAnswer1: "What is telephoto lens?",
        wrongAnswer2: "What is prime lens?",
        points: 10

    };
    $('#eight').click(function () {
        $(this).html(lenses10.description).append($('<br>'), $('<br>'))

        $('#eight').append('<button id="j">A</button>').append(lenses10.rightAnswer, $('<br>'))
        $('#eight').append('<button id="k">B</button>').append(lenses10.wrongAnswer1, $('<br>'))
        $('#eight').append('<button id="l">C</button>').append(lenses10.wrongAnswer2, $('<br>'))
        $('.totalDisplay').text(total);

        $('#j').one('click', function () {

            //if correct answer
            if (lenses10.rightAnswer = "CORRECT!") {
                $("#eight").css('background-color', 'darkgreen');

                // }
                // add points
                total += 10
            }

            console.log(total)

            //else
            //remove points

        })
        $('#k').one('click', function () {
            //if correct answer
            if (lenses10.wrongAnswer1 = "INCORRECT!") {
                $("#eight").css('background-color', 'darkred');

                // }
                // add points
                total -= 10
            }
            console.log(total)
        })
        $('#l').one('click', function () {
            //if correct answer
            if (lenses10.wrongAnswer2 = "INCORRECT!") {
                $("#eight").css('background-color', 'darkred');

                // }
                // add points
                total -= 10
            }
            console.log(total)
        })
    })

    const genres20 = {
        description: "SINGLE OR SMALL GROUP PHOTOGRAPHY",
        rightAnswer: "What is portrait photography?",
        wrongAnswer1: "What is event photography?",
        wrongAnswer2: "What is landscape photography?",
        points: 20

    };
    $('#nine').click(function () {
        $(this).html(genres20.description).append($('<br>'), $('<br>'))

        $('#nine').append('<button id="m">A</button>').append(genres20.rightAnswer, $('<br>'))
        $('#nine').append('<button id="n">B</button>').append(genres20.wrongAnswer1, $('<br>'))
        $('#nine').append('<button id="o">C</button>').append(genres20.wrongAnswer2, $('<br>'))

        $('.totalDisplay').text(total);

        $('#m').one('click', function () {

            //if correct answer
            if (genres20.rightAnswer = "CORRECT!") {
                $("#nine").css('background-color', 'darkgreen');

                // }
                // add points
                total += 20
            }

            console.log(total)

            //else
            //remove points

        })
        $('#n').one('click', function () {
            //if correct answer
            if (genres20.wrongAnswer1 = "INCORRECT!") {
                $("#nine").css('background-color', 'darkred');

                // }
                // add points
                total -= 20
            }
            console.log(total)
        })
        $('#o').one('click', function () {
            //if correct answer
            if (genres20.wrongAnswer2 = "INCORRECT!") {
                $("#nine").css('background-color', 'darkred');

                // }
                // add points
                total -= 20
            }
            console.log(total)
        })


    })
    const settings20 = {
        description: "AV",
        rightAnswer: "What is aperture priority?",
        wrongAnswer1: "What is manual?",
        wrongAnswer2: "What is auto?",
        points: 20

    };


    $('#ten').click(function () {
        $(this).html(settings20.description).append($('<br>'), $('<br>'))

        $('#ten').append('<button id="p">A</button>').append(settings20.rightAnswer, $('<br>'))
        $('#ten').append('<button id="q">B</button>').append(settings20.wrongAnswer1, $('<br>'))
        $('#ten').append('<button id="r">C</button>').append(settings20.wrongAnswer2, $('<br>'))

        $('.totalDisplay').text(total);

        $('#p').one('click', function () {

            //if correct answer
            if (settings20.rightAnswer = "CORRECT!") {
                $("#ten").css('background-color', 'darkgreen');

                // }
                // add points
                total += 20
            }

            console.log(total)

            //else
            //remove points

        })
        $('#q').one('click', function () {
            //if correct answer
            if (settings20.wrongAnswer1 = "INCORRECT!") {
                $("#ten").css('background-color', 'darkred');

                // }
                // add points
                total -= 20
            }
            console.log(total)
        })
        $('#r').one('click', function () {
            //if correct answer
            if (settings20.wrongAnswer2 = "INCORRECT!") {
                $("#ten").css('background-color', 'darkred');

                // }
                // add points
                total -= 20
            }
            console.log(total)
        })




    })

    const equipment20 = {
        description: "CAMERA STAND",
        rightAnswer: "What is tripod?",
        wrongAnswer1: "What is stabilizer?",
        wrongAnswer2: "What is crane?",
        points: 20

    };

    $('#eleven').click(function () {
        $(this).html(equipment20.description).append($('<br>'), $('<br>'))

        $('#eleven').append('<button id="s">A</button>').append(equipment20.rightAnswer, $('<br>'))
        $('#eleven').append('<button id="t">B</button>').append(equipment20.wrongAnswer1, $('<br>'))
        $('#eleven').append('<button id="u">C</button>').append(equipment20.wrongAnswer2, $('<br>'))
        $('.totalDisplay').text(total);

        $('#s').one('click', function () {

            //if correct answer
            if (equipment20.rightAnswer = "CORRECT!") {
                $("#eleven").css('background-color', 'darkgreen');

                // }
                // add points
                total += 20
            }

            console.log(total)

            //else
            //remove points

        })
        $('#t').one('click', function () {
            //if correct answer
            if (equipment20.wrongAnswer1 = "INCORRECT!") {
                $("#eleven").css('background-color', 'darkred');

                // }
                // add points
                total -= 20
            }
            console.log(total)
         })
        $('#u').one('click', function () {
            //if correct answer
            if (equipment20.wrongAnswer2 = "INCORRECT!") {
                $("#eleven").css('background-color', 'darkred');

                // }
                // add points
                total -= 20
            }
            console.log(total)
        })

    })
    const lenses20 = {
        description: "TELEPHOTO LENS",
        rightAnswer: "What is 70-200MM?",
        wrongAnswer1: "What is 35MM?",
        wrongAnswer2: "What is 100MM?",
        points: 20

    };
    $('#twelve').click(function () {
        $(this).html(lenses20.description).append($('<br>'), $('<br>'))

        $('#twelve').append('<button id ="v">A</button>').append(lenses20.rightAnswer, $('<br>'))
        $('#twelve').append('<button id ="w">B</button>').append(lenses20.wrongAnswer1, $('<br>'))
        $('#twelve').append('<button id ="x">C</button>').append(lenses20.wrongAnswer2, $('<br>'))
        $('.totalDisplay').text(total);

        $('#v').one('click', function () {

            //if correct answer
            if (lenses20.rightAnswer = "CORRECT!") {
                $("#twelve").css('background-color', 'darkgreen');

                // }
                // add points
                total += 20
            }

            console.log(total)

            //else
            //remove points

        })
        $('#w').one('click', function () {
            //if correct answer
            if (lenses20.wrongAnswer1 = "INCORRECT!") {
                $("#twelve").css('background-color', 'darkred');

                // }
                // add points
                total -= 20
            }
            console.log(total)
        })
        $('#x').one('click', function () {
            //if correct answer
            if (lenses20.wrongAnswer2 = "INCORRECT!") {
                $("#twelve").css('background-color', 'darkred');

                // }
                // add points
                total -= 20
            }
            console.log(total)
        })
    })
    const genres30 = {
        description: "ANIMAL SUBJECT PHOTOGRAPHY",
        rightAnswer: "What is wildlife photography?",
        wrongAnswer1: "What is portrait photography?",
        wrongAnswer2: "What is fashion photography?",
        points: 30

    };

    
    $('#thirteen').click(function () {
        $(this).html(genres30.description).append($('<br>'), $('<br>'))

        $('#thirteen').append('<button id= "x">A</button>').append(genres30.rightAnswer, $('<br>'))
        $('#thirteen').append('<button id= "y">B</button>').append(genres30.wrongAnswer1, $('<br>'))
        $('#thirteen').append('<button id= "zz">C</button>').append(genres30.wrongAnswer2, $('<br>'))

        $('.totalDisplay').text(total);

        $('#x').one('click', function () {

            //if correct answer
            if (genres30.rightAnswer = "CORRECT!") {
                $("#thirteen").css('background-color', 'darkgreen');

                // }
                // add points
                total += 30
            }

            console.log(total)

            //else
            //remove points

        })
        $('#y').one('click', function () {
            //if correct answer
            if (genres30.wrongAnswer1 = "INCORRECT!") {
                $("#thirteen").css('background-color', 'darkred');

                // }
                // add points
                total -= 30
            }
            console.log(total)
        })
        $('#zz').one('click', function () {
            //if correct answer
            if (genres30.wrongAnswer2 = "INCORRECT!") {
                $("#thirteen").css('background-color', 'darkred');

                // }
                // add points
                total -= 30
            }
            console.log(total)
        })


    })
    const settings30 = {
        description: "TV MODE",
        rightAnswer: "What is time value?",
        wrongAnswer1: "What is through viewfinder? ",
        wrongAnswer2: "What is television?",
        points: 30

    };

    $('#fourteen').click(function () {
        $(this).html(settings30.description).append($('<br>'), $('<br>'))

        $('#fourteen').append('<button id="aa">A</button>').append(settings30.rightAnswer, $('<br>'))
        $('#fourteen').append('<button id="bb">B</button>').append(settings30.wrongAnswer1, $('<br>'))
        $('#fourteen').append('<button id="cc">C</button>').append(settings30.wrongAnswer2, $('<br>'))
        $('.totalDisplay').text(total);

        $('#aa').one('click', function () {

            //if correct answer
            if (settings30.rightAnswer = "CORRECT!") {
                $("#fourteen").css('background-color', 'darkgreen');

                // }
                // add points
                total += 30
            }

            console.log(total)

            //else
            //remove points

        })
        $('#bb').one('click', function () {
            //if correct answer
            if (settings30.wrongAnswer1 = "INCORRECT!") {
                $("#fourteen").css('background-color', 'darkred');

                // }
                // add points
                total -= 30
            }
            console.log(total)
        })
        $('#cc').one('click', function () {
            //if correct answer
            if (settings30.wrongAnswer2 = "INCORRECT!") {
                $("#fourteen").css('background-color', 'darkred');

                // }
                // add points
                total -= 30
            }
            console.log(total)
        })





    })
    const equipment30 = {
        description: "LIGHTING SOURCE",
        rightAnswer: "What is speedlite?",
        wrongAnswer1: "What is cell phone?",
        wrongAnswer2: "What is tripod?",
        points: 30

    };

    $('#fifteen').click(function () {
        $(this).html(equipment30.description).append($('<br>'), $('<br>'))

        $('#fifteen').append('<button id= dd>A</button>').append(equipment30.rightAnswer, $('<br>'))
        $('#fifteen').append('<button id= ee>B</button>').append(equipment30.wrongAnswer1, $('<br>'))
        $('#fifteen').append('<button id= ff>C</button>').append(equipment30.wrongAnswer2, $('<br>'))

        $('.totalDisplay').text(total);

        $('#dd').one('click', function () {

            //if correct answer
            if (equipment30.rightAnswer = "CORRECT!") {
                $("#fifteen").css('background-color', 'darkgreen');

                // }
                // add points
                total += 30
            }

            console.log(total)

            //else
            //remove points

        })
    
        $('#ee').one('click', function () {
            //if correct answer
            if (equipment30.wrongAnswer1 = "INCORRECT!") {
                $("#fifteen").css('background-color', 'darkred');

                // }
                // add points
                total -= 30
            }
            console.log(total)
        })
        $('#ff').one('click', function () {
            //if correct answer
            if (equipment30.wrongAnswer2 = "INCORRECT!") {
                $("#fifteen").css('background-color', 'darkred');

                // }
                // add points
                total -= 30
            }
            console.log(total)
        })

    })

    const lenses30 = {
        description: "WIDE ANGLE LENS",
        rightAnswer: "What is 35mm?",
        wrongAnswer1: "What is 85mm?",
        wrongAnswer2: "What is 100mm?",
        points: 30

    };
    $('#sixteen').click(function () {
        $(this).html(lenses30.description).append($('<br>'), $('<br>'))

        $('#sixteen').append('<button id= gg>A</button>').append(lenses30.rightAnswer, $('<br>'))
        $('#sixteen').append('<button id= hh>B</button>').append(lenses30.wrongAnswer1, $('<br>'))
        $('#sixteen').append('<button id= ii>C</button>').append(lenses30.wrongAnswer2, $('<br>'))


        $('.totalDisplay').text(total);

        $('#gg').one('click', function () {

            //if correct answer
            if (lenses30.rightAnswer = "CORRECT!") {
                $("#sixteen").css('background-color', 'darkgreen');

                // }
                // add points
                total += 30
            }

            console.log(total)

            //else
            //remove points

        })
        $('#hh').one('click', function () {
            //if correct answer
            if (lenses30.wrongAnswer1 = "INCORRECT!") {
                $("#sixteen").css('background-color', 'darkred');

                // }
                // add points
                total -= 30
            }
            console.log(total)
        })
        $('#ii').one('click', function () {
            //if correct answer
            if (lenses30.wrongAnswer2 = "INCORRECT!") {
                $("#sixteen").css('background-color', 'darkred');

                // }
                // add points
                total -= 30
            }
            console.log(total)
        })


    })
    const genres40 = {
        description: "PHOTOGRAPHY FOR EVENTS",
        rightAnswer: "What is event photography?",
        wrongAnswer1: "What is portrait photography?",
        wrongAnswer2: "What is landscape photography?",
        points: 40

    };
    $('#seventeen').click(function () {
        $(this).html(genres40.description).append($('<br>'), $('<br>'))

        $('#seventeen').append('<button id= "gg">A</button>').append(genres40.rightAnswer, $('<br>'))
        $('#seventeen').append('<button id= "hh">B</button>').append(genres40.wrongAnswer1, $('<br>'))
        $('#seventeen').append('<button id= "ii">C</button>').append(genres40.wrongAnswer2, $('<br>'))

        $('.totalDisplay').text(total);

        $('#gg').one('click', function () {

            //if correct answer
            if (genres40.rightAnswer = "CORRECT!") {
                $("#seventeen").css('background-color', 'darkgreen');

                // }
                // add points
                total += 40
            }

            console.log(total)

            //else
            //remove points

        })
        $('#hh').one('click', function () {
            //if correct answer
            if (genres40.wrongAnswer1 = "INCORRECT!") {
                $("#seventeen").css('background-color', 'darkred');

                // }
                // add points
                total -= 40
            }
            console.log(total)
        })
        $('#ii').one('click', function () {
            //if correct answer
            if (genres40.wrongAnswer2 = "INCORRECT!") {
                $("seventeen").css('background-color', 'darkred');

                // }
                // add points
                total -= 40
            }
            console.log(total)
        })




    })
    const settings40 = {
        description: "HIGH SPEED CONTINUOUS",
        rightAnswer: "What is shooting mode?",
        wrongAnswer1: "What is fun?",
        wrongAnswer2: "What is metering?",
        points: 40

    };

    $('#eighteen').click(function () {
        $(this).html(settings40.description).append($('<br>'), $('<br>'))

        $('#eighteen').append('<button id="mm">A</button>').append(settings40.rightAnswer, $('<br>'))
        $('#eighteen').append('<button id="nn">B</button>').append(settings40.wrongAnswer1, $('<br>'))
        $('#eighteen').append('<button id="oo">C</button>').append(settings40.wrongAnswer2, $('<br>'))
        $('.totalDisplay').text(total);

        $('#mm').one('click', function () {

            //if correct answer
            if (settings40.rightAnswer = "CORRECT!") {
                $("#eighteen").css('background-color', 'darkgreen');

                // }
                // add points
                total += 40
            }

            console.log(total)

            //else
            //remove points

        })
        $('#nn').one('click', function () {
            //if correct answer
            if (settings40.wrongAnswer1 = "INCORRECT!") {
                $("#eighteen").css('background-color', 'darkred');

                // }
                // add points
                total -= 40
            }
            console.log(total)
        })
        $('#oo').one('click', function () {
            //if correct answer
            if (settings40.wrongAnswer2 = "INCORRECT!") {
                $("#eighteen").css('background-color', 'darkred');

                // }
                // add points
                total -= 40
            }
            console.log(total)
        })





    })
    const equipment40 = {
        description: "ONE-LEGGED CAMERA STAND",
        rightAnswer: "What is monopod?",
        wrongAnswer1: "What is tripod?",
        wrongAnswer2: "What is table?",
        points: 10

    };

    $('#nineteen').click(function () {
        $(this).html(equipment40.description).append($('<br>'), $('<br>'))

        $('#nineteen').append('<button id= "qq">A</button>').append(equipment40.rightAnswer, $('<br>'))
        $('#nineteen').append('<button id= "rr">B</button>').append(equipment40.wrongAnswer1, $('<br>'))
        $('#nineteen').append('<button id= "ss">C</button>').append(equipment40.wrongAnswer2, $('<br>'))
        $('.totalDisplay').text(total);

        $('#qq').one('click', function () {

            //if correct answer
            if (equipment40.rightAnswer = "CORRECT!") {
                $("#nineteen").css('background-color', 'darkgreen');

                // }
                // add points
                total += 40
            }

            console.log(total)

            //else
            //remove points

        })
        $('#rr').one('click', function () {
            //if correct answer
            if (equipment40.wrongAnswer1 = "INCORRECT!") {
                $("#nineteen").css('background-color', 'darkred');

                // }
                // add points
                total -= 40
            }
            console.log(total)
        })
        $('#ss').one('click', function () {
            //if correct answer
            if (equipment40.wrongAnswer2 = "INCORRECT!") {
                $("#nineteen").css('background-color', 'darkred');

                // }
                // add points
                total -= 40
            }
            console.log(total)
        })



    })
    const lenses40 = {
        description: "50MM",
        rightAnswer: "What is prime lens?",
        wrongAnswer1: "What is macro lens?",
        wrongAnswer2: "What is kit lens?",
        points: 10

    };
    $('#twenty').click(function () {
        $(this).html(lenses40.description).append($('<br>'), $('<br>'))

        $('#twenty').append('<button id= "tt" >A</button>').append(lenses40.rightAnswer, $('<br>'))
        $('#twenty').append('<button id= "uu">B</button>').append(lenses40.wrongAnswer1, $('<br>'))
        $('#twenty').append('<button id= "vv">C</button>').append(lenses40.wrongAnswer2, $('<br>'))

        $('.totalDisplay').text(total);

        $('#tt').one('click', function () {

            //if correct answer
            if (lenses40.rightAnswer = "CORRECT!") {
                $("#twenty").css('background-color', 'darkgreen');

                // }
                // add points
                total += 40
            }

            console.log(total)

            //else
            //remove points

        })
        $('#uu').one('click', function () {
            //if correct answer
            if (lenses40.wrongAnswer1 = "INCORRECT!") {
                $("#twenty").css('background-color', 'darkred');

                // }
                // add points
                total -= 40
            }
            console.log(total)
        })
        $('#vv').one('click', function () {
            //if correct answer
            if (lenses40.wrongAnswer2 = "INCORRECT!") {
                $("#twenty").css('background-color', 'darkred');

                // }
                // add points
                total -= 40
            }
            console.log(total)
        })


    })

    const genres50 = {
        description: "BRIDE AND GROOM PHOTOGRAPHY",
        rightAnswer: "What is wedding photography?",
        wrongAnswer1: "What is graduation photography?",
        wrongAnswer2: "What is nature photograpphy?",
        points: 50

    };
    $('#twentyone').click(function () {
        $(this).html(genres50.description).append($('<br>'), $('<br>'))

        $('#twentyone').append('<button id="ww">A</button>').append(genres50.rightAnswer, $('<br>'))
        $('#twentyone').append('<button id="xx">B</button>').append(genres50.wrongAnswer1, $('<br>'))
        $('#twentyone').append('<button id="yy">C</button>').append(genres50.wrongAnswer2, $('<br>'))
        $('.totalDisplay').text(total);

        $('#ww').one('click', function () {

            //if correct answer
            if (genres50.rightAnswer = "CORRECT!") {
                $("#twentyone").css('background-color', 'darkgreen');

                // }
                // add points
                total += 50
            }

            console.log(total)

            //else
            //remove points

        })
        $('#xx').one('click', function () {
            //if correct answer
            if (genres50.wrongAnswer1 = "INCORRECT!") {
                $("#twentyone").css('background-color', 'darkred');

                // }
                // add points
                total -= 50
            }
            console.log(total)
        })
        $('#yy').one('click', function () {
            //if correct answer
            if (genres50.wrongAnswer2 = "INCORRECT!") {
                $("#twentyone").css('background-color', 'darkred');

                // }
                // add points
                total -= 50
            }
            console.log(total)
        })



    })
    const settings50 = {
        description: "COLOR TEMPERATURE",
        rightAnswer: "What is white balance?",
        wrongAnswer1: "What is pink balance?",
        wrongAnswer2: "What is yellow balance?",
        points: 50

    };

    $('#twentytwo').click(function () {
        $(this).html(settings50.description).append($('<br>'), $('<br>'))

        $('#twentytwo').append('<button id= "aaa">A</button>').append(settings50.rightAnswer, $('<br>'))
        $('#twentytwo').append('<button id= "bbb">B</button>').append(settings50.wrongAnswer1, $('<br>'))
        $('#twentytwo').append('<button id= "ccc">C</button>').append(settings50.wrongAnswer2, $('<br>'))

        $('.totalDisplay').text(total);

        $('#aaa').one('click', function () {

            //if correct answer
            if (settings50.rightAnswer = "CORRECT!") {
                $("#twentytwo").css('background-color', 'darkgreen');

                // }
                // add points
                total += 50
            }

            console.log(total)

            //else
            //remove points

        })
        $('#bbb').one('click', function () {
            //if correct answer
            if (settings50.wrongAnswer1 = "INCORRECT!") {
                $("#twentytwo").css('background-color', 'darkred');

                // }
                // add points
                total -= 50
            }
            console.log(total)
        })
        $('#ccc').one('click', function () {
            //if correct answer
            if (settings50.wrongAnswer2 = "INCORRECT!") {
                $("#twentytwo").css('background-color', 'darkred');

                // }
                // add points
                total -= 50
            }
            console.log(total)
        })



    })
    const equipment50 = {
        description: "DIFFUSER LIGHT",
        rightAnswer: "What is diffuser? ",
        wrongAnswer1: "What is speedlite?",
        wrongAnswer2: "What is tripod?",
        points: 50

    };

    $('#twentythree').click(function () {
        $(this).html(equipment50.description).append($('<br>'), $('<br>'))

        $('#twentythree').append('<button id= "ddd">A</button>').append(equipment50.rightAnswer, $('<br>'))
        $('#twentythree').append('<button id= "eee">B</button>').append(equipment50.wrongAnswer1, $('<br>'))
        $('#twentythree').append('<button id= "fff">C</button>').append(equipment50.wrongAnswer2, $('<br>'))

        $('.totalDisplay').text(total);

        $('#ddd').one('click', function () {

            //if correct answer
            if (equipment50.rightAnswer = "CORRECT!") {
                $("#twentythree").css('background-color', 'darkgreen');

                // }
                // add points
                total += 50
            }

            console.log(total)

            //else
            //remove points

        })
        $('#eee').one('click', function () {
            //if correct answer
            if (equipment50.wrongAnswer1 = "INCORRECT!") {
                $("#twentythree").css('background-color', 'darkred');

                // }
                // add points
                total -= 50
            }
            console.log(total)
        })
        $('#fff').one('click', function () {
            //if correct answer
            if (equipment50.wrongAnswer2 = "INCORRECT!") {
                $("#twentythree").css('background-color', 'darkred');

                // }
                // add points
                total -= 50
            }
            console.log(total)
        })


    })
    const lenses50 = {
        description: "PRODUCE DISTORTED PHOTOS",
        rightAnswer: "What is fisheye lens?",
        wrongAnswer1: "What is a telephoto lens?",
        wrongAnswer2: "What is a macro lens?",
        points: 50

    };
    $('#twentyfour').click(function () {
        $(this).html(lenses50.description).append($('<br>'), $('<br>'))

        $('#twentyfour').append('<button id= "ggg">A</button>').append(lenses50.rightAnswer, $('<br>'))
        $('#twentyfour').append('<button id= "hhh">B</button>').append(lenses50.wrongAnswer1, $('<br>'))
        $('#twentyfour').append('<button id= "iii">C</button>').append(lenses50.wrongAnswer2, $('<br>'))

        $('.totalDisplay').text(total);

        $('#ggg').one('click', function () {

            //if correct answer
            if (lenses50.rightAnswer = "CORRECT!") {
                $("#twentyfour").css('background-color', 'darkgreen');

                // }
                // add points
                total += 50
            }

            console.log(total)

            //else
            //remove points

        })
        $('#hhh').one('click', function () {
            //if correct answer
            if (lenses50.wrongAnswer1 = "INCORRECT!") {
                $("#twentyfour").css('background-color', 'darkred');

                // }
                // add points
                total -= 50
            }
            console.log(total)
        })
        $('#iii').one('click', function () {
            //if correct answer
            if (lenses50.wrongAnswer2 = "INCORRECT!") {
                $("#twentyfour").css('background-color', 'darkred');

                // }
                // add points
                total -= 50
            }
            console.log(total)
        })
        
       

    })

     
  




    








});


