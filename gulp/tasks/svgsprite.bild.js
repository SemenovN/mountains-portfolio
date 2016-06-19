'use strict';

module.exports = function() {
 $.gulp.task('svgSpriteBuild', function () {
	return  $.gulp.src('./source/images/icons/*.svg')
	// minify svg
		.pipe($.svgmin({
			js2svg: {
				pretty: true
			}
		}))
		// remove all fill, style and stroke declarations in out shapes
		.pipe($.cheerio({
			run: function ($) {
				$('[fill]').removeAttr('fill');
				$('[stroke]').removeAttr('stroke');
				$('[style]').removeAttr('style');
			},
			parserOptions: {xmlMode: true}
		}))
		// cheerio plugin create unnecessary string '&gt;', so replace it.
		.pipe($.replace('&gt;', '>'))
		// build svg sprite
		.pipe($.svgSprite({
			mode: {
				symbol: {
					sprite: "../images/sprite.svg",
					render: {
						scss: {
							dest:'../style/common/_sprite.scss',
							/*template: "../mypersonalpage/source/style/common/_sprite_template.scss"*/
						}
					}
				}
			}
		}))
		.pipe($.gulp.dest('source/'));
})
};