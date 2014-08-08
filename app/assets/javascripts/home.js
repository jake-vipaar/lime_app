$(function(){
		var email_regex = new RegExp(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
		var infoContainer = $('#infoContainer');
		var priceContainer = $('#priceContainer');
		var importantFields = ['business_user_password', 'business_user_email']
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

		var calculate_price = function(button){
			num_users = $('#business_user_user_count').val()
			if(button.attr("id") == "premiumButton"){
				return num_users * 25;
			} else {
				return num_users * 10;
			}
		}

		var add_error = function(input){
			$(input).addClass(error_class);
			var validation_field_id = $(input).attr("data-validationField");
			if(validation_field_id){
				$('#' + validation_field_id).removeClass('hidden');
			}
		}

		var remove_error = function(input){
			$(input).removeClass(error_class);
			var validation_field_id = $(input).attr("data-validationField");
			if(validation_field_id){
				$('#' + validation_field_id).addClass('hidden');
			}
		}


		var validate_input = function(){
			var valid = true;
			var inputs = $('.signUp');

			$.each(inputs, function(index, input){
				remove_error(input);
				if(input.value.length === 0){
					valid = false;
					add_error(input)
				}else if($.inArray(input.id, importantFields) > -1){
					if(input.id === "business_user_password" && input.value.length < 8){
						valid = false;
						add_error(input)				
					}
					if(input.id === "business_user_email" && !email_regex.test(input.value)){
						valid = false;
						add_error(input);
					}
				}
			});

			return valid;
		}

		var set_price = function(button){
			var price = calculate_price(button);
			$('#price').html('$' + price);
		}

		$('#tryIt').on('click', function(){
			goToContainer(infoContainer);
		});

		$('.version-btn').on('click', function(e){
				var valid = validate_input();
				var that = $(this);
				if(valid){
					$.ajax({
						type: "POST",
						url: 'business_users',
						data: $('#userInfoForm').serializeArray(),
						dataType: "json",
						success: function(){
							goToContainer(priceContainer);
							set_price(that);
						},
						fail: function(){
							alert('fail!')
						}
					});
			}
			
			return false;
		})
	});