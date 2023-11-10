// ===========================================
// メインビジュアルのアニメーション主要視覺動畫
// ===========================================
$(function(){
  let objectTime;
  let animationCount = 0;
  let startCount = 0;
  let phase = 0;

  // 背景のオブジェクトにディレイを設定する関数（前半のアニメーションに利用）為背景對象設置延遲的函數（在動畫的前半部分使用）
  function objectDelaySubSet() {
    $('.waveObjectArea__item').each(function(n){
      objectTime = (n * 0.07 - n * 0.045) * 1.5;
      $(this).css({ transitionDelay: objectTime + 's' });
      $(this).find('.waveObject').css({ transitionDelay: objectTime + 's' });
    });
  }

  // 背景のオブジェクトにディレイを設定する関数（中盤のアニメーションに利用）
  function objectDelayMidSet() {
    $('.waveObjectArea__item').each(function(n){
      objectTime = (n * 0.1 - n * 0.045) * 1.5;
      $(this).css({ transitionDelay: objectTime + 's' });
      $(this).find('.waveObject').css({ transitionDelay: objectTime + 's' });
    });
  }

  // 背景のオブジェクトにディレイを設定する関数（後半のアニメーションに利用）
  function objectDelayMainSet() {
    $('.waveObjectArea__item').each(function(n){
      objectTime = n * 70;
      $(this)
        .attr('data-delay', objectTime)
        .css({ transitionDelay: 0 + 's' });
      $(this)
        .find('.waveObject').attr('data-delay', objectTime)
        .css({ transitionDelay: 0 + 's' });
    });
  }

  // 背景のオブジェクトをスタートの位置に移動(將背景對象移動到起始位置)
  function startPosiSet() {
    $('.waveObjectArea__item')
      .attr('class', 'waveObjectArea__item')
      .addClass('waveObjectArea__item--start');

    setTimeout(function(){
      upDown();
    }, 1500);
  }

  // 背景のオブジェクトを上下に運動させるアニメーション単体(上下移動背景對象的單個動畫)
  function upDownAnimation( item, delay ) {
    setTimeout(function(){
      item
        .removeClass('waveObjectArea__item--start waveObjectArea__item--up')
        .addClass('waveObjectArea__item--down');
    }, delay);

    setTimeout(function(){
      item
        .removeClass('waveObjectArea__item--down')
        .addClass('waveObjectArea__item--up');
    }, delay + 2000);

    setTimeout(function(){
      item
        .removeClass('waveObjectArea__item--start waveObjectArea__item--up')
        .addClass('waveObjectArea__item--down');
    }, delay + 3500);

    setTimeout(function(){
      item
        .removeClass('waveObjectArea__item--down')
        .addClass('waveObjectArea__item--up');
    }, delay + 4900);
  }

  // 背景のオブジェクトを上下に運動させる単体アニメーションをループさせる処理(處理循環單個動畫來上下移動背景對象)
  function upDownLoop( item, delay, count ) {
    animationCount++;

    $('.waveObjectArea', '.waveObjectArea1')
      .attr('class', 'waveObjectArea', '.waveObjectArea1')
      .addClass('waveObjectArea--phase' + phase);

    upDownAnimation( item, delay );

    if( animationCount === 5 ) {
      phase++;
      animationCount = 0;
    }

    if( phase === 3 ) {
      phase = 0;
    }

    setTimeout(function(){
		upDownLoop( item, delay, count )
    }, 7600);
  }

  // 背景のオブジェクトを上下に運動させるアニメーション本体(上下移動背景對象的動畫)
  function upDown() {
    objectDelayMainSet();

    $('.waveObjectArea__item').each(function(n){
      const item = $(this),
            delay = Number( item.attr('data-delay') )
            count = n + 1;

      upDownLoop( item, delay, count );
    });
  }

  // 背景のオブジェクトのアニメーションをスタート。あるいは、スタート位置に戻す(啟動背景對象的動畫。 或返回起始位置)
  function start() {
    startCount++;

    objectDelaySubSet();

    $('.mainVisual').addClass('mainVisual--fadeIn');

    $('.waveObjectArea', '.waveObjectArea1')
      .attr('class', 'waveObjectArea', '.waveObjectArea1')
      .addClass('waveObjectArea--phase0');

    if( startCount === 1 ) {
      $('.waveObjectArea__item')
        .attr('class', 'waveObjectArea__item')
        .addClass('waveObjectArea__item--ballStart');
    } else {
      $('.waveObjectArea__item')
        .attr('class', 'waveObjectArea__item')
        .addClass('waveObjectArea__item--ball');
    }

    setTimeout(function(){
      objectDelayMidSet();
      startPosiSet();
      
    }, 2000);
  }

  setTimeout(function(){
    start();
  }, 1000);
});


