<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [vue-i18n](./vue-i18n.md) &gt; [useI18n](./vue-i18n.usei18n.md)

## useI18n() function

Enable vue-i18n composable API

<b>Signature:</b>

```typescript
export declare function useI18n(options?: I18nComposerOptions): I18nComposer;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  options | <code>I18nComposerOptions</code> |  |

<b>Returns:</b>

`I18nComposer`

## Example

case: Component resource base localization

```html
<template>
  <form>
    <label>{{ t('language') }}</label>
    <select v-model="locale">
      <option value="en">en</option>
      <option value="ja">ja</option>
    </select>
  </form>
  <p>message: {{ t('hello') }}</p>
</template>

<script>
import { useI18n } from 'vue-i18n'

export default {
 setup() {
   const { t, locale } = useI18n({
     locale: 'ja',
     messages: {
       en: { ... },
       ja: { ... }
     }
   })
   // Something to do ...

   return { ..., t, locale }
 }
}
</script>

```
