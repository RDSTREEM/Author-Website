<script>
	import { enhance } from '$app/forms';
	import { page } from '$app/stores';

	// @ts-ignore
	function submitOnChange(event) {
		// @ts-ignore
		event.target.parentElement.submit();
	}
	// let settingsAction = `${$page.params.lang}`;
</script>

<form method="post" action="/?/setLang" use:enhance>
	<select on:change={submitOnChange}>
		<option value="en">EN</option>
		<option value="am">AM</option>
	</select>
</form>
