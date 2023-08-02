<svelte:head>
	<title>About | Abebe Kebie</title>
</svelte:head>

<main>
	<div class="wrapper">
		<div class="latest-container container">
			<!-- <h1 class="header">Latest Release</h1> -->
			<!-- TODO Load from a database -->

			<p class="text-intro" />
			<div class="img-container">
				<div class="img">
					<img src="/author_photo.jpg" alt="Author" />
				</div>
				<span class="main-text">
					ጤና ይስጥልኝ!
					<br><br>
					አበበ ከቤ ሁነኛው እባላለሁ፡፡ ሰርቲፋይድ የማኔጅመንት (ስራ አመራር) አማካሪ፣ አሰልጣኝና ተመራማሪ ነኝ፡፡ በባህር ዳር ዩኒቨርስቲ ቢዝነስና ኢኮኖሚክስ ኮሌጅ ለበርካታ አመታት በድህረ ምርቃና ቅድመ ምረቃ ደረጃ በማስተማር ላይ እገኛለሁ፡፡ እንዲሁም በተለያዩ መንግስታዊና መንግስታዊ ባልሆኑ ተቋማት፣ በንግድ ድርጅትቶች ውስጥ በአማካሪነትና በአሰልጣኝነት እሰራለሁ፡፡ በግሌ የአንኳር ማኔጅመንት ሶሊሽንስ የስልጠና እና ማማከር አገልግሎት መስራችና ስራ አስኪያጅ ነኝ። 
					<br><br>
					በሽዎች ለሚቆጠሩ ግለሰቦች እና በመቶዎች ለሚቆጠሩ ድርጅቶች በገበያ ስራ አመራር፣ስትራቴጅክ ስራ አመራር፣ በሽያጭ ስራ፣ በደንበኞች አገልግሎት መርሆች፣  ኢንተርፕርነርሽፕ ፣ ፕሮጀክት አስተዳደርና አመራረር፣ የለውጥ አስተዳደርና ድርጅታዊ ኢኖቬሽን፣ ወዘተ… ዙሪያ   በርከት ያሉ ስልጠናዎችንና የማማከር ስራዎችን ሰርቻለሁ። በመሆኑም በእነዚህ ጉዳዮች ላይ  ‘የተወሰነ’ ግንዛቤ አለኝ ብየ አምናለሁ። በአሁኑ ስዓት ከስልጠናና የማማከር አገልግሎት በተጨማሪ የበለጠ ተደራሽ ለመሆን በሂደቱም ያለኝን ልምድና ዕውቀት በማካፈል እኔም በሂደቱ ለመማርና   ልምዴንና እውቀቴን  ወደላቀ ደረጃ ለማሳደግ መፅሀፎች በመፃፍ እንዲሁም ጦማር(blog)፣ በይነ መረብ እና የተለያዩ ማህበራዊ ሚዲያዎች ላይ ሃሳቦችን በማጋራት ላይ እገኛለሁ።
					<br><br>
					ይወዳጁኝ፣ ይከተሉኝ።
					<br><br>
					የማነሳቸውን ሃሳቦች  ይጠቀሙባቸዋል ብለው ለሚያስቧቸው ድርጅቶችና ግለሰቦች  ሃሳቦችን ያጋሩ።
					<br><br>
					ከልብ አመሰግናለሁ!!

				</span>
			</div>
		</div>
	</div>
</main>

<style>
	/* .header {
		text-align: center;
		padding-top: 1rem;
		font-size: 1.6rem;
	} */
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
		/* height: 500px; */
		width: 1000px;
		border-radius: 20px;
		padding: 1rem;
		overflow-y: hidden;
	}

	.latest-container {
		background-color: cadetblue;
	}

	.main-text {
		margin-top: 1rem;
		font-size: 1rem;
		text-align: justify;
	}

	img {
		max-width: 7.5rem;
		height: auto;
	}
	.img {
		margin-right: 1rem;
	}
	.img-container {
		display: flex;
		flex-direction: column;
	}

	@media (max-width: 500px) {
		.main-text {
			font-size: 0.8rem;
		}
	}
</style>
