$(function(){
		var email_regex = new RegExp(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
		var infoContainer = $('#infoContainer');
		var priceContainer = $('#priceContainer');
		var importantFields = ['password', 'email']
		var error_class = 'has-error'

		var scrollToContainer = function(container){
			$('html,body').animate({
   				scrollTop: container.offset().top
			});
		}

		var showContainer = function(container){
			$(container).removeClass('hidden');
		}

		var goToContainer = function(container){
			showContainer(container);
			scrollToContainer(container);
		}

		var validate_input = function(){
			var valid = true;
			var inputs = $('.signUp');

			$.each(inputs, function(index, input){
				var input_object = $(input);
				if(input.value.length === 0){
					valid = false;
					input_object.addClass(error_class);
				}else if($.inArray(input.id, importantFields)){
					if(input.id === "password" && input.value.length < 8){
						valid = false;
						input_object.addClass(error_class);
					}
						
					if(input.id === "email" && !email_regex.test(input.value)){
						valid = false;
						input_object.addClass(error_class);
					}
				}else{
					input_object.removeClass(error_class);
				}
			});

			return valid;
		}

		$('#tryIt').on('click', function(){
			goToContainer(infoContainer);
		});

		$('#continueSignUp').on('click', function(){
			var valid = validate_input();
			if(valid){
				//todo:server-side validation (model-binding)
				// goToContainer(versionContainer);
			}
			return false;
		});

		$('.version-btn').on('click', function(){
			$.ajax({
				type: "POST",
				url: 'business_users',
				data: $('#userInfoForm').serializeArray(),
				dataType: "json",
				success: function(){
					alert('woot!');
				},
				fail: function(){
					alert('fail!')
				}
			});
			// var valid = validate_input();
			// if(valid)
			// 	goToContainer(priceContainer);
		})

		$('form#userInfoForm').bind("ajax:success", function(event, data, status, xhr) {
		  alert('done');
		}).on('ajax:error',function(xhr, status, error){
	      alert('Failed.');
	    }).on('ajax:before', function(event, data, status, xhr) {
		  alert('before');
		});
	});