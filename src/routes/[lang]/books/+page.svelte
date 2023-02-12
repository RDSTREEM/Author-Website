<script>
	// @ts-ignore
	export let data;

	// @ts-ignore
	$: lang = data.lang;
</script>

<svelte:head>
	<title>Books | Abebe Kebie</title>
</svelte:head>

<main>
	<div class="wrapper">
		<div class="latest-container container">
			<h1 class="header">
				{#if lang === 'am'}የደንበኞች አገልግሎት{/if}
				<br />
				<a href="/files/sample.pdf">Download Sample</a>
			</h1>
			<!-- TODO Load from a database -->

			<p class="text-intro">
				{#if lang === 'am'}የአገልግሎት ልህቀት ለዘላቂ ተወዳዳሪነት{/if}
				<!-- The Book Of Stuff -->
			</p>
			<div class="img-container">
				<img class="cover-img" src="/book_cover.jpg" alt="Cover" />
			</div>
			<span class="main-text">
				<p>የደንበኞች አገልግሎት ልህቀት ብቸኛው ዘላቂ የትርፍማነትና ተወዳዳሪነት ምንጭ</p>
				<p>
					• ደንበኞች የሚጠቀሟቸውን ምርቶችና አገልግሎቶች የሚገዙባቸውንና የሚገለገሉባቸውን ድርጅቶችና ተቋማት ከሚቀይሩባቸው ምክነያቶች ውስጥ ዋናውና
					ቀዳሚው ከደንበኞች አገልግሎት ጋር የተያያዙ ጉዳዮች መሆኑን በአገልግሎት ልህቀትና በገበያ ስራ አመራር ዙሪያ የተደረጉ ጥናቶችና ምርምሮች
					ይጠቁማሉ።
				</p>
				<div class="img-container">
					<img class="stat-img" src="/stats.png" alt="Statistics" />
				</div>
				<p class="img-subtitle">ደንበኞች የሚጠቀሟቸውን ምርቶችና አገልግሎቶች የሚቀይሩባቸው ምክነያቶች</p>
				<p>
					ስለ ደንበኞች አገልግሎት ስናስብ በአብዛኞቻችን አዕምሮ ውስጥ የሚመጡት ሃሳቦች የደንበኞችን ፍላጎቶችና ችግሮች በሚገባ ማጥናትና መረዳት፣
					ምርትና አገልግሎቶችን በደንበኞች ፍላጎትና ችግሮች መሰረት በማምረትና አገልግሎት በመስጠት የደንበኞችን ፍላጎቶች ማርካትና ችግሮቻቸውን መፍታት
					የሚሉ ጉዳዮች ናቸው። ሆኖም ግን እነዚህ ጉዳዮች አሁን በምንኖርበት ሉላዊ የውድድር ዓለም ውስጥ ማንኛውም ድርጅት ሊተገብራቸው የሚችል መሰረታዊ
					የውድድር መሰረቶች በመሆናቸው ለዘላቂ ተወዳዳሪነት ያላቸው ፋይዳ እዚህ ግባ የሚባል አይደለም። አሁን በምንኖርበት ሉላዊ የውድድር ዓለም ውስጥ
					የደንበኞችን ፋላጎቶችና ችግሮች በሚገባ በመረዳት ምርትና አገልግሎቶችን የደንበኞችን ፍላጎቶችና ችግሮች መሰረት ባደረገ ሁኔታ በማምረትና
					አገልግሎት በመስጠት ደንበኞችን ከማርካትና ችግሮቻቸውን ከመፍታት ባለፈ ደንበኞች ከሚጠብቁት በላቀ ሁኔታ በማገልገልና ችግሮቻቸውን በመፍታት
					ደንበኞችን ማስደሰትና ማስደመም፤ ከደንበኞች ጋር መተማመንና የጋራ ተጠቃሚነትን መሰረት ያደረገ ዘላቂነት ያለው ስልታዊ የአጋርነት ስርዓት
					መመስረት ያስፈልጋል።
				</p>
				<p>
					የደንበኞች አገልግሎት ልህቀት የሃገራትንና የተቋማትን ስኬትና እጣፈንታ የሚወስንና ዘላቂ ተወዳዳሪ ሆኖ ለመገኘት አንኳር የሆነ ጉዳይ ነው።
					በዚህ መፅሃፍ ውስጥ ተቋማት የአገልግሎት ልህቀት ባህል ለመገንባትና ለመተግበር ሊያከናውኗቸው የሚገቡ የተለያዩ ስልቶችና ስትራቴጅዎች በስፋት
					ቀርበዋል።
				</p>
				<p>
					“የአካል ብቃት እንቅስቃሴ ለጤናማ አኗኗር ጠቃሚ መሆኑን ማወቅና መረዳት በተግባር የአካል ብቃት እንቅስቃሴ ማዘውተር እጅግ በጣም የተለያዩ
					ጉዳዮች ናቸው”
				</p>
				<p>
					በዚህ መፅሀፍ ውስጥ በተቋማት ውስጥ የደንበኞች አገልግሎት ልህቀት ባህል ለመገንባት የሚያስችሉ 30 (ሰላሳ) ስልቶችና ስትራቴጅዎች በስፋትና
					በጥልቀት ተብራርተው ቀርበዋል፡፡ ሆኖም ግን አንባቢያን አንድ ትልቅ ጉዳይ ከልብ ማለት ይኖርባቸዋል፡፡ ይህ ጉዳይም በዚህ መፅሁፍ ውስጥ
					የተካተቱ የአገልግሎት ልህቀት ስልቶችና ስትራቴጅዎች ማወቅና መረዳት ብቻ በቂ ያለመሆኑን ሀቅ ነው፡፡
				</p>
				<p>
					በተቋማት ውስጥ የአገልግሎት ልህቀት ባህል ለመገንባትና በዘላቂነት ተወዳዳሪ ለመሆን እነዚህን የአገልግሎት ልህቀት ስልቶችና ስትራቴጅዎች
					ለመተግበር የሚያስችል የትግበራ ስርዓት መገንባት ይኖርባቸዋል፡፡
				</p>
			</span>
		</div>
	</div>
</main>

<style>
	.header {
		text-align: center;
		padding-top: 1rem;
		font-size: 1.6rem;
	}
	.text-intro {
		font-size: 1.5rem;
		font-style: oblique;
		text-align: center;
		padding-top: 1rem;
		padding-bottom: 1rem;
	}

	.wrapper {
		padding-top: 0.7rem;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.container {
		display: block;
		height: max-content;
		width: 1000px;
		border-radius: 20px;
		padding: 1rem;
		overflow-y: hidden;
	}

	.latest-container {
		background-color: cadetblue;
	}

	.main-text {
		font-size: 1em;
	}

	.img-container {
		display: grid;
		justify-items: center;
	}

	.cover-img {
		max-width: 40%;
	}

	.main-text > p {
		text-align: justify;
		padding-top: 1rem;
		padding-left: 1rem;
		padding-right: 1rem;
	}

	p.img-subtitle {
		font-size: 0.8rem;
		color: #e7e7e7;
		text-align: center;
	}

	.stat-img {
		margin-top: 1.5rem;
	}
</style>
