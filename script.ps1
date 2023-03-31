$timeFormat = "yyyy-MM-ddTHH:mm:ssZ"
$date = Get-Date
$today = $date.ToUniversalTime().ToString($timeFormat)
$twoMonthsAgo = $date.AddDays(-60)
$timeStamp = $twoMonthsAgo.ToUniversalTime().ToString($timeFormat)
$categoryCode = 'ARTICLE'

Write-Host $timestamp

while ($getRequest.Count -gt 0) {
    Write-Host $getRequest
    foreach ($value in $getRequest.category) {
        if ($value.code -eq $categoryCode) {
            foreach ($result in $getRequest) {
                $getArticle = Invoke-RestMethod -Uri $result.url -Method Get
                foreach ($field in $getArticle.created) {
                    if ($field.date -gt $timestamp -And $field.date -lt $today ) {
                        $outPut = [PSCustomObject]@{}      
                        foreach ($title in $result){
                            $outPut | Add-Member -Name "Name" -MemberType NoteProperty -value $title.no
                            $outPut | Add-Member -Name "Date" -MemberType NoteProperty -value $field.date
                        }
                        Write-Host $outPut
                    }
                    

                }
            }
        }
    
    

        $getRequest = Invoke-RestMethod -Uri "https://api.cristin.no/v2/results?institution=224" -Method Get
    
    }
}

$excelInfo = Join-Path -Path $PSScriptRoot -ChildPath $ "Article"
$outPutList | Update-FirstObjectProperties | Export-Excel $excelFilePathAndName -ClearSheet -NoNumberConversion * -AutoFilter -FreezeTopRow
