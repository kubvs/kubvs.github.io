	$(document).ready(function() {
	// obiekt z całym taryfikatorem
	var obj = {
		'Podstawowe': {
			'Opatrunek': {
				'Informacja': 'Ochrania ranę lub skaleczenie przed środowiskiem zewnętrznym i zapobiegająca dalszemu zakażeniu.',
				'Kwota': 500,
			},
			'Szwy': {
				'Informacja': 'Zszycie rany - Polega na zbliżaniu do siebie brzegów skóry w celu ułatwienia szybszego gojenia rany.',
				'Kwota': 750,
			},
			'Gips': {
				'Informacja': 'Zakładamy pacjentowi gips, gdy doszło do złamania kończyny.',
				'Kwota': 1000,
			},
			'Orteza': {
				'Informacja': 'Jego głównym zadaniem jest unieruchomienie stawów kończyn, które uległy urazom np. skręcenia, zwichnięcia lub zerwania więzadeł.',
				'Kwota': 1000,
			},
			'Kołnierz Ortopedyczny': {
				'Informacja': 'Stabilizuje szyje. W razie podejrzenia urazu, stosowany jest jako podstawowy środek w celu zapobieżenia dalszym urazom kręgosłupa szyjnego i rdzenia kręgowego.',
				'Kwota': 1000,
			},
		},
		'Operacje': {
			'Operacja Prosta': {
				'Informacja': 'Np. operacja złamanej nogi, wyciągnięcie kuli z rany postrzałowej w bark.',
				'Kwota': 5000,
			},
			'Operacja Złożona': {
				'Informacja': 'Np. operacja wycięcia guza mózgu, wyciągniecie pięciu kul z rany.',
				'Kwota': 10000,
			},
		},
		'Leki': {
			'Morfina': {
                'Informacja': 'Jedna z najmocniejszych substancji przeciw bólowych.',
                'Kwota': 2000,
			},
			'Adrenalina': {
                'Informacja': 'Środek na niskie akcje serca.',
				'Kwota': 2000,
			},
			'Maseczka z Narkozą': {
                'Informacja': 'Maseczka z płynem usypiającym, odurzającym, znieczulającym.',
                'Kwota': 2000,
            },
			'Ketonal': {
                'Informacja': 'Jedna z mocniejszych substancji przeciw bólowych.',
				'Kwota': 1750,
			},
			'Hydrożel': {
				'Informacja': 'Środek na poparzenia.',
				'Kwota': 1750,
            },
			'Hydroxyzyna': {
                'Informacja': 'Środek Usypiający.',
                'Kwota': 1750,
            },
			'Furosemid': {
                'Informacja': 'Środek na zbyt wysokie ciśnienie.',
				'Kwota': 1500,
			},
			'Altacet': {
				'Informacja': 'Maść na siniaki itp.',
				'Kwota': 1500,
			},
			'Gutron': {
                'Informacja': 'Środek na zbyt niskie ciśnienie.',
                'Kwota': 1500,
            },
			'Relanium': {
                'Informacja': 'Środek na drgawki.',
                'Kwota': 1500,
            },
			'Parulon': {
                'Informacja': 'Środek na duszności.',
                'Kwota': 1500,
			},
			'Paracetamol': {
				'Informacja': 'Środek przeciwgorączkowy.',
				'Kwota': 1250,
			},
			'Ibuprofen': {
                'Informacja': 'Jedna z słabszych substancji przeciw bólowych.',
				'Kwota': 1250,
			},
			'Żel przeciwświądowy': {
				'Informacja': 'Środek stosowany na ukąszenia owadów, pokrzywy, choroby skóry.',
				'Kwota': 1250,
			},
			'Jodyna': {
                'Informacja': 'Środek dezynfekujący.',
				'Kwota': 750,
			},
			'Sól Fizjologiczna': {
				'Informacja': '. Sól fizjologiczna na zatoki, katar i kaszel - roztwór chlorku sodu idealnie sprawdza się jako preparat do inhalacji, zwłaszcza przy infekcjach górnych dróg oddechowych.',
				'Kwota': 750,
			},
		},
        'Kroplówki': {
			'Kroplówka z Krwią': {
                'Informacja': 'Kroplówka z danym rodzajem krwi',
                'Kwota': 3000,
            },
			'Kroplówka z Witaminami': {
                'Informacja': 'Skład: A, B1, B2, B5, B6, B12, C, D3, E, kwas foliowy, biotyna, Witamina PP',
                'Kwota': 1250,
            },
			'Kroplówka z Minerałami': {
                'Informacja': 'Skład: Cynk, Selen, Molibden, Miedź, Chrom, Żelazo, Jod, Mangan',
                'Kwota': 1250,
            },
        }, 'Zastrzyki': {
			'Zastrzyk przeciw krzepowy': {
                'Informacja': 'Podawany przy złamaniach.',
                'Kwota': 7500,
            },
			'Zastrzyk przeciw tężcowy': {
                'Informacja': 'Podajemy przy ranach postrzałowych, uszkodzeniach ciała poprzez metalowy przedmiot.',
                'Kwota': 7500,
            },	
			'Zastrzyk przeciw wściekliźnie': {
                'Informacja': 'Podajemy przy ugryzieniach.',
                'Kwota': 7500,
            },
		}, 'Badania': {
			'Pobranie krwi': {
                'Informacja': 'Pobieramy krew, gdy chcemy dowiedzieć się jaką grupę krwi ma pacjent. // Ewentualnie sprawdzenie chorób.',
                'Kwota': 1250,
			},
			'Badanie Moczu': {
				'Informacja': 'Badanie moczu może pomóc w rozpoznaniu choroby nerek oraz dróg moczowych. Obecność glukozy, mocznika, białka czy stwierdzone ketony w moczu, wskazują kłopoty.',
				'Kwota': 1000,
			},
			'Tomografia Komputerowa [TK]': {
                'Informacja': 'Sprawdzamy czy w ciele jest kula itp.',
                'Kwota': 7500,
            },
			'Rentgen [RTG]': {
                'Informacja': 'Sprawdzamy czy doszło do złamania.',
                'Kwota': 7500,
			},
			'Elektrokardiografia [EKG]': {
				'Informacja': 'Rozpoznajemy choroby serca.',
				'Kwota': 7500,
			},
			'Ultrasonografia [USG]': {
				'Informacja': 'Pozwala na uzyskanie obrazu przekroju badanego obiektu.',
				'Kwota': 7500,
			},
		},	'Inne': {
			'Bezpodstawne Wezwanie EMS': {
				'Informacja': 'Chyba wiadomo :D.',
				'Kwota': 10000
			},
			'Łamanie Regulaminu Szpitala': {
				'Informacja': 'TAKIE RZECZY WYSTAWIAJĄ TYLKO OSOBY Z ZARZĄDU!',
				'Kwota': 10000,
			},
		}
    };
	
	//tworzenie htmla
	$("body").append('<input type="submit" id="show" value="Pokaż"/>');
	var i = 1;
	$.each(obj, function(k, v) {
		$("body").append('<div id="cat' + i + '">');
		var category = $('<p class="category"></p>').text(k);
		$("#cat" + i + "").append(category);
		$("#cat" + i + "").append('<div class="checkboxes" id="cb' + i + '"style="display: none">');
		$.each(v, function(k2, v2) {
			var name = $('<p id="values"></p>');
			var name2 = $('<label></label>');
			var name3 = '<input type="checkbox" value="' + k2 +'">' + k2 + ' <input type="text" id="' + k2.split(/[\s, )(/]+/).join('') +'" value=1>';
			$(name2).append(name3);
			$(name).append(name2);
			$("#cb" + i + "").append(name);
			name.append('<br>');
			name.append(document.createTextNode("("));
			$.each(v2, function(k3, v3) {
				if(v3 == ''){
					v3 = 'Brak';
				};
				name.append(document.createTextNode(" " + k3 + ": " + v3 + ","));
			});
			name.append(document.createTextNode(")"));
		});
		i = i+1;
	});
	$("body").append('<div class="footer"><p>Copyright 2020 © by Kubvs</p></div>');

    // tablice przechowująca zaznaczone wartości
	var arrayDodatkowe = [];
    var arrayKwota = [];
    // rozwijanie kategorie
    $('.category').click(function() {
        $(this).next().toggle();
    });

    $('#show').click(function() {
        // przy każdym kliknięciu pokaż należy wyczyścić tablicę
		arrayWyrok = [];
        arrayDodatkowe = [];
		arrayKwota = [];
        $('input:checkbox:checked').each(function() {
			var name = $(this).val();
			var quantity = $('#' + name.split(/[\s, )(/]+/).join('') + '');
			var q2 = quantity.val();
			// dodawanie zaznaczonych wartości do 5 tablic
			if (q2 <= 1) {
				arrayWyrok.push(name);
				$.each(obj, function(k, v) {
					$.each(v, function(k2, v2) {
						if(k2 == name){
							$.each(v2, function(k3, v3) {
								if(k3 == 'Dodatkowe'){
									if(v3 != ''){
										if(arrayDodatkowe.length == 0){
											arrayDodatkowe.push(v3);
										} else {
											var exists = false;
											arrayDodatkowe.forEach(function(item){
												if(item == v3){
													exists = true;
												}
											});
											if(exists == false){
												arrayDodatkowe.push(v3);
											}
										}
									}
								} else if (k3 == 'Kwota') {
									arrayKwota.push(v3);
								};
							});
						}
					});
				});
			} else {
				arrayWyrok.push(name + " x" + q2);
				$.each(obj, function(k, v) {
					$.each(v, function(k2, v2) {
						if(k2 == name){
							$.each(v2, function(k3, v3) {
								if(k3 == 'Dodatkowe'){
									if(v3 != ''){
										if(arrayDodatkowe.length == 0){
											arrayDodatkowe.push(v3);
										} else {
											var exists = false;
											arrayDodatkowe.forEach(function(item){
												if(item == v3){
													exists = true;
												}
											});
											if(exists == false){
												arrayDodatkowe.push(v3);
											}
										}
									}
								} else if (k3 == 'Kwota') {
									arrayKwota.push(v3 * q2);
								};
							});
						}
					});
				});
			}
			//not checked
			$(this).prop('checked', false);
        });
		
		//zmienne do wyświetlania
		var wyrok = '';
		var dodatkowe = '';
		var Kwota = 0;
		//połączenie wszystkich wartości w tablicach
		arrayWyrok.forEach(function(item){
			wyrok = wyrok + item + ", ";
		});
		arrayDodatkowe.forEach(function(item){
			dodatkowe = dodatkowe + item + ", ";
		});
		arrayKwota.forEach(function(item){
			Kwota += parseInt(item);
		});
		//pokazywanie wyroku
		if(wyrok == ''){
			alertify.error("Najpierw wybierz wykonany punkt!");
		} else {
			//sprawdź czy mandat czy służba więzienna
			if(1 > 0){
				alertify.success("Pomyślnie uzyskano fakturę");
				setTimeout(function(){
					alertify.alert("<b>Faktura:</b><br>"+wyrok+"<br><br><b>Kwota Faktury:</b><br> "+Kwota+"<br>" ).setting({
						'title': "<b><font size='4'>FAKTURA</font></b>",
						'movable': false,
					}).show();
				},700);
			} else {
				alertify.success("Pomyślnie uzyskano fakturę");
				setTimeout(function(){
					alertify.alert("<b>Faktura:</b><br>"+wyrok+"<br><br><b>Kwota Faktury:</b><br> "+Kwota+"$<br>" ).setting({
						'title': "<b><font size='4'>Kwota</font></b>",
						'movable': false,
					}).show();
				},700);
			}
		}
	});
});