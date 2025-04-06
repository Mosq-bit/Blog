
  function googleTranslateElementInit() {
    new google.translate.TranslateElement({
      pageLanguage: 'en', // Язык исходной страницы
      
      includedLanguages:  'es',
      // Список поддерживаемых языков
      layout: google.translate.TranslateElement.InlineLayout.SIMPLE

      
    
    },'google_translate_element');
  }
  googleTranslateElementInit();
    