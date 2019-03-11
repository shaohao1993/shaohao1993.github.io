function getCityFn(provinceId) {

    $.getJSON("/BusinessCenter/getCityJSON?provinceId=" + provinceId, function (
			result) {


        if (provinceId == 9 || provinceId == 1 || provinceId == 2 || provinceId == 22) {
            $("#districtId").hide();
            $("#cityDiv").html("<option  value='0'>请选择区县</option>");
        } else {
            $("#districtId").show();
            $("#cityDiv").html("<option  value='0'>请选择城市</option>");
        }

        $.each(result, function (i, city) {
            var temp_html = "<option value='" + city.CityID + "'>"
					+ city.CityName + "</option>";
            $("#cityDiv").append(temp_html);

        });
    });

    $("#districtId").html("<option value='0'>选择区</option>");


}

function getCat2ListFn(parent_id) {

    $.getJSON("/BusinessCenter/getCat2ListJSON?parent_id=" + parent_id, function (
			result) {
        $("#cat2Div").html("<option  value='0'>请选择行业细分</option>");
        $.each(result, function (i, city) {
            var temp_html = "<option value='" + city.catid + "'>"
					+ city.catname + "</option>";
            $("#cat2Div").append(temp_html);

        });
    });

}


function getHYCat2ListFn(parent_id) {

    $.getJSON("/BusinessCenter/getCat2ListJSON?parent_id=" + parent_id, function (
			result) {
        $("#hy_cat2Div").html("<option  value='0'>请选择行业细分</option>");
        $.each(result, function (i, city) {
            var temp_html = "<option value='" + city.catid + "'>"
					+ city.catname + "</option>";
            $("#hy_cat2Div").append(temp_html);

        });
    });

}