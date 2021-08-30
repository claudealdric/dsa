# Interview question of the week

## Prompt

Get the top five GitHub OSS code repositories that make use of the
`navigator.sendBeacon` web API. How would you go about it?

## Solution

If we set the source restraint to GitHub, then a simple solution would be to use
the search functionality on GitHub's site and use the search term
"navigator.SendBeacon." This would be an appropriate solution if the context is
to simply gather information on the potential top repositories that use this
API. We can then decide on what criteria to use for determining the sort order
and pick the top five from there.

If the context is that we can't directly use GitHub's site and an application
needs to consume the data via an API, then we can use a similar approach from
the above but instead use GitHub's API.

Since we are looking for top _repositories_, we could use the GitHub API's
`/search/repositories` endpoint with the appropriate query parameters. A sample
endpoint with the query parameters would look as follows:

```
https://api.github.com/search/repositories?q=navigator.sendBeacon&per_page=5&sort=stars&order=desc
```

In this case, the `sort` query parameter would depend on how we define the "top
five."
